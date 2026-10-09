import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yvswcrb6p {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14V5H5zm0 0V5zm6.462-2.5H12.5l2-7.936V7.5h-5v1h3.962z");
}
</style><path class="yvswcrb6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:looks-7-outline-sharp"} {...others} />);
}

export default Component;
