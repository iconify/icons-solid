import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dki9w5bhg {
  d: path("M4.75 21.5v-4h2v4m4.25 0v-4h2v4m4.25 0v-4h2v4M5.75 13h.01M12 11.5h.01m6.24 2.5h.01");
}

.ooeq3nbuk {
  d: path("M2.5 21.5v-12l3.25-3L9 9.5v-2L12 4l3 3.5v3l3.25-3l3.25 3v11ZM9 9.5v12m6-11v11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ooeq3nbuk"/><path class="dki9w5bhg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:townhouse"} {...others} />);
}

export default Component;
