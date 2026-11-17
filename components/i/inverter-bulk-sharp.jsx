import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cdy707mft {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1");
}

.cuyn6tgcc {
  fill: currentColor;
}

.eskjdpd-q {
  d: path("M7 11V7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4a1 1 0 0 1-.2.6a6 6 0 0 1-9.6 0A1 1 0 0 1 7 11m8-.354V8H9v2.646a4 4 0 0 0 6 0M9 16h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="cdy707mft"/><path class="eskjdpd-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:inverter-bulk-sharp"} {...others} />);
}

export default Component;
