import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.arnjgwc1g {
  d: path("m6.5 7l2.75 1.5L12 7l2.75 1.5L17.5 7v10.5L14.75 19L12 17.5L9.25 19L6.5 17.5Zm2.75 1.5V19M12 7v10.5m2.75-9V19");
}

.oq2nkbb8e {
  d: path("M3 20.5v-17h18v17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oq2nkbb8e"/><path class="arnjgwc1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bifold-door"} {...others} />);
}

export default Component;
