import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pc922vb3n {
  d: path("M5 9.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Zm3.75 0h.01m8.74 12v-7m-1.25 1.25l1.25-1.25l1.25 1.25m1.75-1.25v7m-1.25-1.25l1.25 1.25l1.25-1.25");
}

.rqhlbv3vi {
  d: path("M14.7 19.5H2.5v-17h12.25v9.15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rqhlbv3vi"/><path class="pc922vb3n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:disk-io"} {...others} />);
}

export default Component;
