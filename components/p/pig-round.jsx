import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ta3eeokxq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 8C4 6 4 4 4 3c2 0 4 1 5 2c1.5-.3 4.5-.3 6 0c1-1 3-2 5-2c0 1 0 3-1 5c1.5 1.5 2 3.5 2 6c0 4-2.5 7-6 7H9c-3.5 0-6-3-6-7c0-2.5.5-4.5 2-6m4 0h.01M15 8h.01M12 11c2.76 0 5 1.34 5 3s-2.24 3-5 3s-5-1.34-5-3s2.24-3 5-3m-2 3h.01M14 14h.01");
}
</style><path class="ta3eeokxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:pig-round"} {...others} />);
}

export default Component;
