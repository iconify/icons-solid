import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xdpqpc8uh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 11.75v7.5a2 2 0 0 0 2 2h10.5a2 2 0 0 0 2-2v-7.5Zm-2 0h18.5M9.5 16.5h5M9 11.75l1.66-7.82l6.36 1.35l-1.38 6.47");
}
</style><path class="xdpqpc8uh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:election-poll"} {...others} />);
}

export default Component;
