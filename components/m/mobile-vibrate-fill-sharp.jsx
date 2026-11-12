import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dzrzp7fap {
  fill: currentColor;
  d: path("M7 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1M3.949 5.684l1 3c.068.205.068.427 0 .632L4.054 12l.895 2.684c.068.205.068.427 0 .632l-1 3a1.001 1.001 0 0 1-1.898-.632L2.946 15l-.895-2.684a1 1 0 0 1 0-.632L2.946 9l-.895-2.684a1.001 1.001 0 0 1 1.898-.632m18 12a1.001 1.001 0 0 1-1.898.632l-1-3a1 1 0 0 1 0-.632L19.946 12l-.895-2.684a1 1 0 0 1 0-.632l1-3a1.001 1.001 0 0 1 1.898.632L21.054 9l.895 2.684c.068.205.068.427 0 .632L21.054 15Z");
}
</style><path class="dzrzp7fap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mobile-vibrate-fill-sharp"} {...others} />);
}

export default Component;
