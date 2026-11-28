import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q1gm1rzab {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L14.5858 3C14.851 3 15.1054 3.1054 15.2929 3.2929L20.7071 8.7071C20.8946 8.8946 21 9.149 21 9.4142L21 21");
}
</style><path class="q1gm1rzab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:corner-chamfer"} {...others} />);
}

export default Component;
