import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mult0yojt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.25 15.25a6.75 6.75 0 1 1-8.5-8.5a5.5 5.5 0 0 0 8.5 8.5m.604-11.604l.119.389a1.5 1.5 0 0 0 .992.992l.389.119a.37.37 0 0 1 0 .708l-.389.119a1.5 1.5 0 0 0-.992.992l-.119.389a.37.37 0 0 1-.708 0l-.119-.389a1.5 1.5 0 0 0-.992-.992l-.389-.119a.37.37 0 0 1 0-.708l.389-.119a1.5 1.5 0 0 0 .992-.992l.119-.389a.37.37 0 0 1 .708 0");
}
</style><path class="mult0yojt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:theme-dark"} {...others} />);
}

export default Component;
