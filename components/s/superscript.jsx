import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yeodv_bvh {
  fill: currentColor;
  d: path("M19 9V7q0-.425.288-.712T20 6h2V5h-3V4h3q.425 0 .713.288T23 5v1q0 .425-.288.713T22 7h-2v1h3v1zM5.875 20l4.625-7.275L6.2 6h2.65l3.1 5h.1l3.075-5H17.8l-4.325 6.725L18.125 20H15.45l-3.4-5.425h-.1L8.55 20z");
}
</style><path class="yeodv_bvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:superscript"} {...others} />);
}

export default Component;
