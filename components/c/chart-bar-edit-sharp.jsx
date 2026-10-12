import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zi32rp6pk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 8.75h2.5v11.5h-2.5zm5 4h2.5v7.5h-2.5zm6-.5h2.5v8h-2.5zm5-7.5h2.5v15.5h-2.5z");
}
</style><path class="zi32rp6pk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:chart-bar-edit-sharp"} {...others} />);
}

export default Component;
