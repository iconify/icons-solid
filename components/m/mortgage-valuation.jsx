import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i_-bsb4gz {
  d: path("m2.5 11l6-6l6 6v10h-12Zm14.25 2.25h4.5v5.5L19 21l-2.25-2.25ZM12.5 9l4.25 4.25m2.25 2.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zxuhvovba {
  d: path("M6.5 21v-3.5a2 2 0 0 1 4 0V21");
}
</style><g class="ulnmmdpxh"><path class="i_-bsb4gz"/><path class="zxuhvovba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:mortgage-valuation"} {...others} />);
}

export default Component;
