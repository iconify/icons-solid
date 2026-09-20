import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.krbpyacjd {
  d: path("M216.008 64H176v-8a24.027 24.027 0 0 0-24-24h-48a24.027 24.027 0 0 0-24 24v8H40.008a16.018 16.018 0 0 0-16 16v128a16.018 16.018 0 0 0 16 16h176a16.018 16.018 0 0 0 16-16V80a16.018 16.018 0 0 0-16-16zM96 56a8.01 8.01 0 0 1 8-8h48a8.01 8.01 0 0 1 8 8v8H96zm120.008 152h-176V80h176l.01 128z");
  fill: currentColor;
}
</style><path class="krbpyacjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:briefcase-simple"} {...others} />);
}

export default Component;
