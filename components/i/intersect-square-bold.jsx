import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.y87kpjg6y {
  fill: currentColor;
  d: path("M216 84h-44V40a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h44v44a12 12 0 0 0 12 12h120a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12M52 148V52h96v32H96a12 12 0 0 0-12 12v52Zm56-23l23 23h-23Zm40 6l-23-23h23Zm56 73h-96v-32h52a12 12 0 0 0 12-12v-52h32Z");
}
</style><path class="y87kpjg6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:intersect-square-bold"} {...others} />);
}

export default Component;
