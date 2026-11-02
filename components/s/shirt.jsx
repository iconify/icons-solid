import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x_vnf49di {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 4L4 6c-.604.242-1 .638-1 1v3a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V7c0-.362-.396-.758-1-1l-5-2m0 0a3 3 0 0 1-6 0");
}
</style><path class="x_vnf49di"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shirt"} {...others} />);
}

export default Component;
