import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.huqp4-bek {
  fill: currentColor;
  d: path("M5.066 20q-.46 0-.69-.401t-.012-.805l6.934-12.469q.218-.423.702-.423t.702.423l6.935 12.47q.217.403-.013.804t-.69.401zm.334-1h6.1V8.021zm7.1 0h6.1L12.5 8.021z");
}
</style><path class="huqp4-bek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:details-rounded"} {...others} />);
}

export default Component;
