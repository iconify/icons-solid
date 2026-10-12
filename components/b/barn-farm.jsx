import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fze0k6b6c {
  d: path("M2.75 20.45v-9.4q0-.8.58-1.35l4.59-4.4q.58-.55 1.16 0l4.59 4.4q.58.55.58 1.35v9.4q0 .8-.8.8h-9.9q-.8 0-.8-.8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ragbcib1n {
  d: path("M6 21.25v-5h5v5m-5-5l5 5m0-5l-5 5m1.5-10.5h2m7.75 10.5V8.75a2 2 0 0 1 4 0v12.5Z");
}
</style><g class="hntgybcog"><path class="fze0k6b6c"/><path class="ragbcib1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:barn-farm"} {...others} />);
}

export default Component;
