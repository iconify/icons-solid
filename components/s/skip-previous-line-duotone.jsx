import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f8g-6ycep {
  d: path("M22 5.0329L22 18.9671C22 21.2763 19.8658 22.736 18.1292 21.6145L7.34015 14.6474C5.55328 13.4935 5.55328 10.5065 7.34016 9.35258L18.1292 2.38548C19.8658 1.26402 22 2.72368 22 5.0329Z");
}

.fobn6xbgo {
  d: path("M2 5V19");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ipq1z-bjh"><path class="f8g-6ycep"/><path class="fobn6xbgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:skip-previous-line-duotone"} {...others} />);
}

export default Component;
