import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.idvhw3hqy {
  fill: currentColor;
  d: path("M12 19.577L1.423 9q2.183-1.964 4.91-2.982Q9.063 5 12 5t5.666 1.018Q20.394 7.037 22.577 9zM11.5 15h1v-5h-1zm.934-6.374q.182-.182.182-.434t-.182-.433T12 7.577t-.434.182t-.182.433t.182.434t.434.182t.434-.182");
}
</style><path class="idvhw3hqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:perm-scan-wifi"} {...others} />);
}

export default Component;
