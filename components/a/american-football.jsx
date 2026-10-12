import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tfrlw2b7d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.25V13.5m-7.25 0h14.5m-14.5 0V3.25m14.5 10.25V3.25M9.13 9.01a3.6 2.1-40 1 1 5.74-4.02a3.6 2.1-40 1 1-5.74 4.02");
}
</style><path class="tfrlw2b7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:american-football"} {...others} />);
}

export default Component;
