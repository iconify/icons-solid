import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hlb6o0s3r {
  fill: currentColor;
  d: path("M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm7.5-2.039h6.076q.349 0 .578-.23t.23-.577v-4.077q0-.348-.23-.578t-.578-.23h-6.076q-.349 0-.578.23t-.23.578v4.077q0 .348.23.578t.578.23m3.038-2.847");
}
</style><path class="hlb6o0s3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:picture-in-picture-alt-rounded"} {...others} />);
}

export default Component;
