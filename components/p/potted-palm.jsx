import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.amyxhpovy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 14.5h13l-1.75 7h-9.5Zm6.5 0V6m0 0c-2.5-2.5-6.5-2.5-9 .5m9-.5c2.5-2.5 6.5-2.5 9 .5M12 6c-3.5.5-6 2.5-7 5.5M12 6c3.5.5 6 2.5 7 5.5");
}
</style><path class="amyxhpovy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:potted-palm"} {...others} />);
}

export default Component;
