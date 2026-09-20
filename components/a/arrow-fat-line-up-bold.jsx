import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.uh5vv7bcw {
  fill: currentColor;
  d: path("m232.48 111.51l-96-96a12 12 0 0 0-17 0l-96 96A12 12 0 0 0 32 132h36v44a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12v-44h36a12 12 0 0 0 8.48-20.49M176 108a12 12 0 0 0-12 12v44H92v-44a12 12 0 0 0-12-12H61l67-67l67 67Zm12 108a12 12 0 0 1-12 12H80a12 12 0 0 1 0-24h96a12 12 0 0 1 12 12");
}
</style><path class="uh5vv7bcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-fat-line-up-bold"} {...others} />);
}

export default Component;
