import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l6y8p5ble {
  fill: currentColor;
  d: path("M5 8h10v8H5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.zabeedcrj {
  fill: currentColor;
  d: path("M17 7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zm-2 9H5V8h10z");
}
</style><path class="l6y8p5ble"/><path class="zabeedcrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-videocam"} {...others} />);
}

export default Component;
