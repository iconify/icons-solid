import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d8lyp9b7s {
  fill: currentColor;
  d: path("M4 5V4h16v1zm0 15V7.385h16V20zm1-1h14V8.385H5zm0 0V8.385z");
}
</style><path class="d8lyp9b7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:page-header-outline-sharp"} {...others} />);
}

export default Component;
