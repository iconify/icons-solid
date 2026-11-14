import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e_6aj-buc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v19m-9.5-6H9m-5.5 0l.75 6h3l.75-6m7 0h6.5m-5.5 0l.75 6h3l.75-6M12 4.5H4.5m2-2l-2 2l2 2M12 10h7.5m-2-2l2 2l-2 2");
}
</style><path class="e_6aj-buc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:sorting-guide"} {...others} />);
}

export default Component;
