import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dqv7viulr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 24l7.488-7.488v14.976zm37 0l-7.488-7.488v14.976zm-22.024 3.524h7.048v7.488h3.964L24 42.5l-7.488-7.488h3.964zm0-7.048h7.048v-7.488h3.964L24 5.5l-7.488 7.488h3.964z");
}
</style><path class="dqv7viulr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:nova-post"} {...others} />);
}

export default Component;
