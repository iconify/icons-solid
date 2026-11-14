import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n1ck6k3ri {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.5V11M8 21.5h8M12 16q-3.5.75-7-3q3.75-1 7 3Zm0-2q3.5.75 7-3.5q-3.75-1-7 3.5ZM2.25 7.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm2.5 0h.01M16.5 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM19 5h.01");
}
</style><path class="n1ck6k3ri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:leave-accrual"} {...others} />);
}

export default Component;
