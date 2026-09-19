import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.h-0o86bxs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.091 3.5c4.478 4.815.337 9.722.337 9.722l-8.035 7.882l5.643 5.704l-5.06 4.999L9.334 21.165z");
}

.xotlkxbcz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.909 44.5c-4.478-4.815-.337-9.722-.337-9.722l8.035-7.882l-5.643-5.704l5.06-4.999l10.642 10.642z");
}
</style><path class="h-0o86bxs"/><path class="xotlkxbcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:seekho"} {...others} />);
}

export default Component;
