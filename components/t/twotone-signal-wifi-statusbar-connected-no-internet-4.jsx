import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ktj7_mbhl {
  fill: currentColor;
  d: path("M12 4C7.31 4 3.07 5.9 0 8.98L12 21l5-5.01V8h5.92C19.97 5.51 16.16 4 12 4");
}

.q8zkrq46o {
  fill: currentColor;
  d: path("M19 18h2v2h-2zm0-8h2v6h-2z");
}
</style><path class="q8zkrq46o"/><path class="ktj7_mbhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-signal-wifi-statusbar-connected-no-internet-4"} {...others} />);
}

export default Component;
