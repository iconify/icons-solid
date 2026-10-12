import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tieejrbqa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5.75h3.5v12.5h-3.5zm15-3h3.5v6.5h-3.5zm0 12h3.5v6.5h-3.5zM6.25 9c6 0 5.5-3 11.5-3m-11.5 9c6 0 5.5 3 11.5 3");
}
</style><path class="tieejrbqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sankey-sharp"} {...others} />);
}

export default Component;
