import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v8mhwbb7h {
  d: path("M3.25 4.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm8 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm2.75 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm5.25 2.25L21.5 21");
}

.wk2fr4bhm {
  d: path("M8 21.5V14c0-3-3-4-3-7.75M8 14c0-3 5-4 5-7.75");
}
</style><g class="ulnmmdpxh"><path class="wk2fr4bhm"/><path class="v8mhwbb7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:git-bisect"} {...others} />);
}

export default Component;
