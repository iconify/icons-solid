import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xv73hovyv {
  fill: currentColor;
  d: path("M21 16a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 21H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5ZM5 16a3.004 3.004 0 0 0 3 3h8a3 3 0 0 0 3-3v-6H5Z");
}
</style><path class="xv73hovyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:panel-top-fill-round"} {...others} />);
}

export default Component;
