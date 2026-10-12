import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ejow8ertj {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 17h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.y_pauhbbo {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 3.25h7v5h-7zm10.5 0h7v5h-7zm-7 5v4.5m10.5-4.5v4.5m-14.5 0h18.5v8.5H2.75zm3 4.25h2.5m7.5 0h2.5");
}
</style><g class="ux2u0rbkq"><path class="y_pauhbbo"/><path class="ejow8ertj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:kvm-switch-sharp"} {...others} />);
}

export default Component;
