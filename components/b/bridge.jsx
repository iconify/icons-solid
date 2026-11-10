import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pm0msxb9n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 4V7M6 7V16M6 7C7 9.5 9.5 11 12 11M6 7C5 8.5 4 9.5 2 10M6 16V20M6 16H2M6 16H12M12 11C14.5 11 17 9.5 18 7M12 11V16M12 16H18M18 4V7M18 7V16M18 7C19 8.5 20 9.5 22 10M18 16V20M18 16H22");
}
</style><path class="pm0msxb9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bridge"} {...others} />);
}

export default Component;
