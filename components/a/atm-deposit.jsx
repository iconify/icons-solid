import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aj9pyobbg {
  d: path("M7 5h10v6H7Zm-.5 8.75h6.2m-5.95 3.5h.01m2.49 0h.01m2.49 0h.01M21 15l-5.25 5.25m-.25-4v4.25h4.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y66lzpmzd {
  d: path("M12.7 21.5H4v-19h16v9.6");
}
</style><g class="ulnmmdpxh"><path class="y66lzpmzd"/><path class="aj9pyobbg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:atm-deposit"} {...others} />);
}

export default Component;
