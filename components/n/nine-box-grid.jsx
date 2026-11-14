import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.omuj01mna {
  d: path("M2.5 2.5H7V7H2.5Zm7.25 0h4.5V7h-4.5Zm7.25 0h4.5V7H17ZM2.5 9.75H7v4.5H2.5Zm7.25 0h4.5v4.5h-4.5Zm7.25 0h4.5v4.5H17ZM2.5 17H7v4.5H2.5Zm7.25 0h4.5v4.5h-4.5ZM17 17h4.5v4.5H17Z");
}

.qfvsdtbol {
  d: path("M18.25 3.75h2v2h-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="omuj01mna"/><path class="qfvsdtbol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:nine-box-grid"} {...others} />);
}

export default Component;
