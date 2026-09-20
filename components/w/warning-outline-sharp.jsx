import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r_-nsq3_k {
  fill: currentColor;
  d: path("M2.73 20L12 4l9.27 16zm1.72-1h15.1L12 6zm7.984-1.566q.182-.182.182-.434t-.182-.434t-.434-.181t-.434.181t-.182.434t.182.434t.434.181t.434-.181m-.934-2.05h1v-5h-1zM12 12.5");
}
</style><path class="r_-nsq3_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:warning-outline-sharp"} {...others} />);
}

export default Component;
