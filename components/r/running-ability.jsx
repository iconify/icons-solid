import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.zztm5acki {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.333 29.34L42.5 40.021m-20.5 0L15.833 29.34h12.5c3.556 0 5.778-3.849 4-6.928L24 7.978L5.5 40.02");
}
</style><path class="zztm5acki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:running-ability"} {...others} />);
}

export default Component;
