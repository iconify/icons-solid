import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pya37j6aq {
  fill: currentColor;
  d: path("M12.293 3.293A1 1 0 0 1 14 4v16a1 1 0 0 1-2 0V6.414L8.707 9.707a.999.999 0 1 1-1.414-1.414Z");
}
</style><path class="pya37j6aq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:number-1-bulk-round"} {...others} />);
}

export default Component;
