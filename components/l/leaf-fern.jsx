import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.folf-nb5a {
  d: path("M12 21.5v-14c0-3-1.5-4.75-3.5-4.25c-1.75.5-1.75 3 .25 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wqucxcctz {
  d: path("M12 18q-4.5-.5-7.5-4m7.5 0q-3.5-.5-6.75-4M12 18q4.5-.5 7.5-4M12 14q3.5-.5 6.75-4M12 10q2.5-.5 4.5-3.5");
}
</style><g class="ulnmmdpxh"><path class="folf-nb5a"/><path class="wqucxcctz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:leaf-fern"} {...others} />);
}

export default Component;
