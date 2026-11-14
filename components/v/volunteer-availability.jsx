import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gt9cu5ddg {
  d: path("m8.5 15.25l2.5 2.5l4.5-4.5");
}

.nd7jz5vph {
  d: path("M3.5 4.5h17V21h-17Zm0 5h17M8 2.5v4m8-4v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nd7jz5vph"/><path class="gt9cu5ddg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:volunteer-availability"} {...others} />);
}

export default Component;
