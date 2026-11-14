import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yltnnqucz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 17.5h6.5A1.75 1.75 0 0 1 17 19.25v.5a1.75 1.75 0 0 1-1.75 1.75h-6.5A1.75 1.75 0 0 1 7 19.75v-.5a1.75 1.75 0 0 1 1.75-1.75m.75 0c-5.5-4.5-5-14 2-14c6 0 7.5 6.5 2.5 9C11 14 10 11 12.5 9");
}
</style><path class="yltnnqucz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:sculpture-abstract"} {...others} />);
}

export default Component;
