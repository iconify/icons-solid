import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pfbdq0bib {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-7.384h14V5H5z");
}
</style><path class="pfbdq0bib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:bottom-sheets-sharp"} {...others} />);
}

export default Component;
