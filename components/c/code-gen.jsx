import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qv03u3k9f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 6.5L2.75 12L7 17.5m10-11l4.25 5.5L17 17.5M12 7.25q.57 4.18 4.75 4.75q-4.18.57-4.75 4.75q-.57-4.18-4.75-4.75q4.18-.57 4.75-4.75");
}
</style><path class="qv03u3k9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:code-gen"} {...others} />);
}

export default Component;
