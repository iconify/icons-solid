import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.htft47b4g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m38.055 30.023l-26.84-12.509a2.2 2.2 0 0 1-1.27-1.992V6.6c0-.804.835-1.335 1.563-.996l26.547 12.373zM25.13 24l-13.915 6.486a2.2 2.2 0 0 0-1.27 1.992V41.4c0 .804.835 1.335 1.563.996l26.547-12.373");
}
</style><path class="htft47b4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:devbytes"} {...others} />);
}

export default Component;
