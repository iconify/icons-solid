import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b31qs6a4o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.18 11.24l5.14-4.23q.93-.76.93.44v9.1q0 1.2-.93.44l-5.14-4.23q-.93-.76 0-1.52m15.64 0l-5.14-4.23q-.93-.76-.93.44v9.1q0 1.2.93.44l5.14-4.23q.93-.76 0-1.52");
}
</style><path class="b31qs6a4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:caret-left-right"} {...others} />);
}

export default Component;
