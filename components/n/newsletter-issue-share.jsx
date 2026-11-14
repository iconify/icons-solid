import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a0ebxqtwy {
  d: path("m7 6l4 3l4-3m-8 6.5h8m-8 4h4m4 4.5l5.25-5.25m-4-.25h4.25v4.25");
}

.gstcfgbtg {
  d: path("M11.6 21.5H3.5v-19h15v10.2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gstcfgbtg"/><path class="a0ebxqtwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:newsletter-issue-share"} {...others} />);
}

export default Component;
