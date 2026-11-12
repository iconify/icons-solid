import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hcke0zwib {
  d: path("M14 22C14 18.2288 14 16.3431 15.1716 15.1716M22 14C20.8302 14 19.8419 14 19 14.035");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iwt0w8b9p {
  d: path("M2 14C5.77124 14 7.65685 14 8.82843 15.1716C10 16.3431 10 18.2288 10 22");
}

.p2spj-b_a {
  d: path("M22 10C18.2288 10 16.3431 10 15.1716 8.82843C14 7.65685 14 5.77124 14 2");
}

.pbchzzbqf {
  d: path("M10 2C10 5.77124 10 7.65685 8.82843 8.82843M2 10C3.16976 10 4.15811 10 5 9.96504");
}
</style><g class="ipq1z-bjh"><path class="iwt0w8b9p"/><path class="pbchzzbqf"/><path class="hcke0zwib"/><path class="p2spj-b_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:quit-full-screen-broken"} {...others} />);
}

export default Component;
