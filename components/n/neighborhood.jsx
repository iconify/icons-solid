import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ueid51eer {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5v-9l3.75-3.75L10 12.5v9m.25-12.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m2.5 2.5V21.5m3.25 0v-9h5.5v9m-19 0h19M6.25 16h.01m12.49-.5h.01m-.01 3h.01");
}
</style><path class="ueid51eer"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:neighborhood"} {...others} />);
}

export default Component;
