import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c69y14bvm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 6l6 2c1.107.369 1.738 1.631 1 2l-2 1c-.984.492-1.492 1.508-1 2l3 3a1.414 1.414 0 0 1 0 2l-1 1a1.414 1.414 0 0 1-2 0l-3-3c-.492-.492-1.508.016-2 1l-1 2c-.369.738-1.631.107-2-1L4 6c-.412-1.236.764-2.412 2-2z");
}
</style><path class="c69y14bvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cursor-duocolor"} {...others} />);
}

export default Component;
