import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dj0lbhr2u {
  fill: currentColor;
  d: path("M7 13h10l-5 5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.dt7zp_wra {
  d: path("M12 4.5 14.5 7h-5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jal3bn45q {
  fill: currentColor;
  d: path("M12 4.5 14.5 7h-5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s3pa5qb5b {
  d: path("M7 13h10l-5 5Z");
}

.x50q_4bdr {
  d: path("M3 10h18");
}
</style><g class="hntgybcog"><path class="jal3bn45q"/><path class="dj0lbhr2u"/><path class="dt7zp_wra"/><path class="x50q_4bdr"/><path class="s3pa5qb5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:iceberg-table-duotone-thin"} {...others} />);
}

export default Component;
