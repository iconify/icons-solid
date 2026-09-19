import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.imgpjccuu {
  fill: currentColor;
  d: path("M18 8h-3v2h3v11H6V10h3V8H6c-1.11 0-2 .89-2 2v11a2 2 0 0 0 2 2h12c1.1 0 2-.9 2-2V10a2 2 0 0 0-2-2");
}

.pj6ewyu5x {
  fill: currentColor;
  d: path("M11 16h2V5h3l-4-4l-4 4h3z");
}
</style><path class="imgpjccuu"/><path class="pj6ewyu5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-ios-share"} {...others} />);
}

export default Component;
