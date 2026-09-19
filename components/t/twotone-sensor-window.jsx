import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.moo8yt80z {
  fill: currentColor;
  d: path("M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 2v7h-4v-1h-4v1H6V4zM6 20v-7h12v7z");
}

.w1vz7ndak {
  fill: currentColor;
  d: path("M18 4v7h-4v-1h-4v1H6V4zM6 20v-7h12v7z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="w1vz7ndak"/><path class="moo8yt80z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-sensor-window"} {...others} />);
}

export default Component;
