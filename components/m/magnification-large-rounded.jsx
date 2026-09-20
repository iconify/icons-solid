import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oph27ccob {
  fill: currentColor;
  d: path("M6.308 14.5h9.384q.349 0 .578-.23t.23-.578V8.308q0-.348-.23-.578t-.578-.23H6.308q-.348 0-.578.23t-.23.578v5.384q0 .349.23.578t.578.23M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19z");
}
</style><path class="oph27ccob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:magnification-large-rounded"} {...others} />);
}

export default Component;
