import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.awq7x5wxb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.75H7.5v9.5H2.75zm13.75 0h4.75v9.5H16.5zM2.75 12.5H7.5m9 0h4.75M10 8.75h4v7.5h-4zM7.5 12.5H10m4 0h2.5M12 8.75V5.5m0 10.75v5M9.25 2.75h5.5a2.75 2.75 0 0 1-5.5 0Z");
}
</style><path class="awq7x5wxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:solar-panel-sat-sharp"} {...others} />);
}

export default Component;
