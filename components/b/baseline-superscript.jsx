import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.enxp2leau {
  fill: currentColor;
  d: path("M22 7h-2v1h3v1h-4V7c0-.55.45-1 1-1h2V5h-3V4h3c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1M5.88 20h2.66l3.4-5.42h.12l3.4 5.42h2.66l-4.65-7.27L17.81 6h-2.68l-3.07 4.99h-.12L8.85 6H6.19l4.32 6.73z");
}
</style><path class="enxp2leau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-superscript"} {...others} />);
}

export default Component;
