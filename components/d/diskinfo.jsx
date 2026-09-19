import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.z5m96qnec {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M44.881 28.972a21.48 21.48 0 0 1-15.928 15.93m-9.941 0A21.484 21.484 0 0 1 2.5 24c0-9.95 6.832-18.6 16.512-20.902m9.942 0a21.48 21.48 0 0 1 15.93 15.941");
}
</style><path class="z5m96qnec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:diskinfo"} {...others} />);
}

export default Component;
