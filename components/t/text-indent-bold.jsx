import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.xla9kb-5x {
  fill: currentColor;
  d: path("M228 128a12 12 0 0 1-12 12h-96a12 12 0 0 1 0-24h96a12 12 0 0 1 12 12M120 76h96a12 12 0 0 0 0-24h-96a12 12 0 0 0 0 24m96 104H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24M31.51 144.49a12 12 0 0 0 17 0l40-40a12 12 0 0 0 0-17l-40-40a12 12 0 0 0-17 17L63 96l-31.49 31.51a12 12 0 0 0 0 16.98");
}
</style><path class="xla9kb-5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:text-indent-bold"} {...others} />);
}

export default Component;
