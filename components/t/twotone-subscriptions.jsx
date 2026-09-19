import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f9ai5lq7p {
  fill: currentColor;
  d: path("M4 6h16v2H4zm2-4h12v2H6zm14 8H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2m0 10H4v-8h16zm-10-7.27v6.53L16 16z");
}

.g510-rbqr {
  fill: currentColor;
  d: path("M4 20h16v-8H4zm6-7.27L16 16l-6 3.26z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="g510-rbqr"/><path class="f9ai5lq7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-subscriptions"} {...others} />);
}

export default Component;
