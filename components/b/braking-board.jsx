import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n3jfhzb6g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 3h13.75A2.625 2.625 0 0 1 21.5 5.625v4.75A2.625 2.625 0 0 1 18.875 13H5.125A2.625 2.625 0 0 1 2.5 10.375v-4.75A2.625 2.625 0 0 1 5.125 3M12 13v8.5M7.25 13l3.5-10M12 13l3.5-10m1.25 10l3.5-10");
}
</style><path class="n3jfhzb6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:braking-board"} {...others} />);
}

export default Component;
