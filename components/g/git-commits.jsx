import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fiqpkybvu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2v2.5m-2 2a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2 2v7m-2 2a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2 2V22");
}
</style><path class="fiqpkybvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:git-commits"} {...others} />);
}

export default Component;
