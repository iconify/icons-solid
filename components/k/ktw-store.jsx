import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lzj-qijjd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.127 17.806a13.35 13.35 0 0 0 2.582 14.398l-3.783 8.849C3.122 35.093.369 24.599 4.224 15.568C8.886 4.648 21.518-.426 32.44 4.236S48.433 21.53 43.772 32.45c-3.855 9.03-13.339 14.302-23.04 12.789l3.774-8.853a13.35 13.35 0 0 0 12.183-8.095c2.152-5.04.963-10.668-2.574-14.413L29.48 24.747l-5.842.108l-3.964-4.294l4.643-10.866c-5.151.036-10.037 3.07-12.19 8.11");
}
</style><path class="lzj-qijjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ktw-store"} {...others} />);
}

export default Component;
