import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mly3sybza {
  d: path("M4 21.25V9a8 6.5 0 0 1 16 0v12.25Z");
}

.u_r-_9hpf {
  d: path("M9 9.25a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM4 15h16m-10 3h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mly3sybza"/><path class="u_r-_9hpf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:air-fryer"} {...others} />);
}

export default Component;
