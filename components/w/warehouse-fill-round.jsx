import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qqfz1qjfa {
  fill: currentColor;
  d: path("M16 22v-5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v5H3a1 1 0 0 1 0-2h1v-8c0-1.693 1.069-3.152 2.553-3.894l4-2A1 1 0 0 1 11 6h2c.155 0 .308.036.447.106l4 2C18.931 8.848 20 10.307 20 12v8h1a1 1 0 0 1 0 2Zm0-9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z");
}
</style><path class="qqfz1qjfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:warehouse-fill-round"} {...others} />);
}

export default Component;
