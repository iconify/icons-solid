import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.du2wotb0v {
  fill: currentColor;
  d: path("M6.975 22q-.775 0-1.337-.5T5 20.225L3.275 4.475q-.125-1 .55-1.737T5.5 2h13q1 0 1.675.738t.55 1.737L19 20.225q-.075.775-.638 1.275t-1.337.5zm-.4-6H17.45l1.3-12H5.25z");
}
</style><path class="du2wotb0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:glass-cup-rounded"} {...others} />);
}

export default Component;
