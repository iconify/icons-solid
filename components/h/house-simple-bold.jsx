import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.n5ax036am {
  fill: currentColor;
  d: path("m222.14 105.85l-80-80a20 20 0 0 0-28.28 0l-80 80A19.86 19.86 0 0 0 28 120v96a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12v-96a19.86 19.86 0 0 0-5.86-14.15M204 204H52v-82.35l76-76l76 76Z");
}
</style><path class="n5ax036am"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:house-simple-bold"} {...others} />);
}

export default Component;
