import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s-__8du3x {
  fill: currentColor;
  d: path("M10.5 12.086L21.293 1.293a.999.999 0 1 1 1.414 1.414L11.914 13.5L13 14.586l2.293-2.293a1 1 0 0 1 1.078-.221l5 2c.38.151.629.519.629.928v6a1 1 0 0 1-1 1h-2a16.95 16.95 0 0 1-11.294-4.292l-4.999 4.999a.999.999 0 1 1-1.414-1.414Zm1.476-4.304l-6.933 6.932A17 17 0 0 1 2 5V3a1 1 0 0 1 1-1h6c.409 0 .777.249.928.629l2 5q.03.073.048.153");
}
</style><path class="s-__8du3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:phone-off-fill-sharp"} {...others} />);
}

export default Component;
