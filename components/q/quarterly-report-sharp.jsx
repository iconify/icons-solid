import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.djendxb_n {
  d: path("M12 9.75A4.25 4.25 0 1 0 16.25 14");
}

.pn1vbwbte {
  d: path("M4.25 2.75h15.5v18.5H4.25zm4.25 3.5h7");
}

.s_i5fqbbk {
  d: path("M12.75 13.25v-3.5h3.5v3.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="pn1vbwbte"/><path class="djendxb_n"/><path class="s_i5fqbbk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:quarterly-report-sharp"} {...others} />);
}

export default Component;
