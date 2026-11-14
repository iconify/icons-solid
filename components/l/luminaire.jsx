import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ikx5lvkcz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v5M4.5 15c0-4.5 3.25-7.5 7.5-7.5s7.5 3 7.5 7.5Zm5 0a2.5 2.5 0 0 0 5 0M12 20.25v1.5");
}
</style><path class="ikx5lvkcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:luminaire"} {...others} />);
}

export default Component;
