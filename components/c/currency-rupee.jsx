import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rdwen8iuy {
  fill: currentColor;
  d: path("M13.552 20L7.5 13.692v-1.307h3q1.517 0 2.759-.959t1.268-2.734H6.5v-1h7.92q-.31-1.182-1.388-1.937T10.5 5h-4V4h11v1h-3.942q.715.425 1.24 1.146t.656 1.546H17.5v1h-1.967q-.008 2.125-1.52 3.409q-1.511 1.284-3.513 1.284H8.602L14.942 20z");
}
</style><path class="rdwen8iuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:currency-rupee"} {...others} />);
}

export default Component;
