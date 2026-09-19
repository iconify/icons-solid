import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gijwyjb9q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.22 4.5h12.13s9.31 15.12 11 18a3.19 3.19 0 0 1 0 3l-11 18H12.43S22 28.06 23.05 26.38a3.73 3.73 0 0 0 0-4.55C21.62 19.53 12.22 4.5 12.22 4.5");
}
</style><path class="gijwyjb9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:plex"} {...others} />);
}

export default Component;
