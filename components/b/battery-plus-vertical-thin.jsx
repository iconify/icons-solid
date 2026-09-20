import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.o4c9_xyil {
  fill: currentColor;
  d: path("M92 8a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4m104 48v168a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h96a20 20 0 0 1 20 20m-8 0a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v168a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12Zm-32 80h-24v-24a4 4 0 0 0-8 0v24h-24a4 4 0 0 0 0 8h24v24a4 4 0 0 0 8 0v-24h24a4 4 0 0 0 0-8");
}
</style><path class="o4c9_xyil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:battery-plus-vertical-thin"} {...others} />);
}

export default Component;
