import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kkgt4nb_x {
  d: path("M2.5 11h19M3 11c0 5.5 4 8.5 9 8.5s9-3 9-8.5");
}

.q5mg2kzvp {
  d: path("M5.5 7.75a2.5 3.25 0 1 0 5 0a2.5 3.25 0 1 0-5 0Zm8 0a2.5 3.25 0 1 0 5 0a2.5 3.25 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kkgt4nb_x"/><path class="q5mg2kzvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:nesting-area"} {...others} />);
}

export default Component;
