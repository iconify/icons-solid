import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.io7psg6xj {
  d: path("M12 4v16m4.5-13l-2 1.5l.75 2.5l.5-.25V17h4.5v-6.25l.5.25l.75-2.5l-2-1.5c-.5.75-1 1-1.5 1s-1-.25-1.5-1Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vrm1w0weo {
  fill: currentColor;
  d: path("m4.5 7l-2 1.5l.75 2.5l.5-.25V17h4.5v-6.25l.5.25l.75-2.5l-2-1.5c-.5.75-1 1-1.5 1s-1-.25-1.5-1Z");
}
</style><g class="ulnmmdpxh"><path class="vrm1w0weo"/><path class="io7psg6xj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:laundry-sorting"} {...others} />);
}

export default Component;
