import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o1bgo51ob {
  fill: currentColor;
  d: path("M15.05 12.81L6.56 4.32a.996.996 0 0 0-1.41 0L2.32 7.15a.996.996 0 0 0 0 1.41l8.49 8.49c.39.39 1.02.39 1.41 0l2.83-2.83a.996.996 0 0 0 0-1.41m-.709 4.946l1.414-1.414l4.243 4.243l-1.414 1.414z");
}

.rzsmqdd7p {
  cx: 18.5px;
  cy: 5.5px;
  r: 3.5px;
  fill: currentColor;
}
</style><path class="o1bgo51ob"/><circle class="rzsmqdd7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-sports-cricket"} {...others} />);
}

export default Component;
