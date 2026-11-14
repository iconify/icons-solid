import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c6actfflk {
  d: path("M5.5 9.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm7 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.l0gd08sdg {
  d: path("M9 14.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm1.25 5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM12 3v3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c6actfflk"/><path class="l0gd08sdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:grapes"} {...others} />);
}

export default Component;
