import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a0-pfk7nt {
  fill: currentColor;
  d: path("M13 3.5h6.5V21H13Z");
}

.m6qduebcm {
  d: path("M4.5 11.5V11a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v.5m-6 1.75V15m6-1.75V15m-6 1.75v1.75m6-1.75v1.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v_ui7pbkk {
  d: path("M2.5 21h19");
}
</style><g class="ulnmmdpxh"><path class="v_ui7pbkk"/><path class="a0-pfk7nt"/><path class="m6qduebcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:baseline-compare"} {...others} />);
}

export default Component;
