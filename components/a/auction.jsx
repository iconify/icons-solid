import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gnonnijbw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 38.483a2.446 2.446 0 0 1-2.446 2.446h0a2.446 2.446 0 1 1 2.446-2.446M9.491 30.409h20.657M6.536 7.07H23.44l10.42 33.743M15.922 7.071L5.5 40.814");
}
</style><path class="gnonnijbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:auction"} {...others} />);
}

export default Component;
