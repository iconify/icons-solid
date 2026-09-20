import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yn2l04bvc {
  fill: currentColor;
  d: path("M7 17q-2.075 0-3.537-1.463T2 12t1.463-3.537T7 7q1.25 0 2.263.55T11 9h8q1.25 0 2.125.875T22 12t-.875 2.125T19 15h-8q-.725.9-1.737 1.45T7 17m4.9-4H19q.425 0 .713-.288T20 12t-.288-.712T19 11h-7.1q.05.225.075.5T12 12t-.025.5t-.075.5");
}
</style><path class="yn2l04bvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:switches-rounded"} {...others} />);
}

export default Component;
