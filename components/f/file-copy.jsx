import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wr0v3vbok {
  fill: currentColor;
  d: path("M4 23q-.825 0-1.412-.587T2 21V7h2v14h11v2zm4-4q-.825 0-1.412-.587T6 17V3q0-.825.588-1.412T8 1h7l6 6v10q0 .825-.587 1.413T19 19zm6-11h5l-5-5z");
}
</style><path class="wr0v3vbok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:file-copy"} {...others} />);
}

export default Component;
