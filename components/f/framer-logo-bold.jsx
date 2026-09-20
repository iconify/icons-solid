import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.trx9y1yxh {
  fill: currentColor;
  d: path("M212 104V40a12 12 0 0 0-12-12H56a12 12 0 0 0-8 21l48.44 43H56a12 12 0 0 0-12 12v64a12 12 0 0 0 3.52 8.49l72 72A12 12 0 0 0 140 240v-60h60a12 12 0 0 0 8-21l-48.41-43H200a12 12 0 0 0 12-12m-43.56 52H128a12 12 0 0 0-12 12v43l-48-48v-47h55.44ZM188 92h-55.44l-45-40H188Z");
}
</style><path class="trx9y1yxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:framer-logo-bold"} {...others} />);
}

export default Component;
