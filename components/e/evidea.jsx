import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.kh5x5ldne {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 22.216h-37L24 5.77zm-4.523 12.569l-27.275-9.977c-.937-.342-1.806.809-1.806 1.806v13.81c0 .997.808 1.806 1.806 1.806h27.275c.998 0 1.807-.809 1.807-1.806V36.59c0-.997-.87-1.463-1.807-1.806zM42.5 22.216l-9.87 10.613m-21.928-8.021l4.537-2.592");
}
</style><path class="kh5x5ldne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:evidea"} {...others} />);
}

export default Component;
