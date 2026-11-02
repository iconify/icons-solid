import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gdjn3ebky {
  fill: currentColor;
  d: path("M5 2h4a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H8v1a3 3 0 0 0 3 3h1v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-1h-1a5 5 0 0 1-5-5v-1H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3");
}
</style><path class="gdjn3ebky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:workflow-fill-round"} {...others} />);
}

export default Component;
