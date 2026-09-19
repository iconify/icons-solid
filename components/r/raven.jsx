import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.nrjuacb9v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9.638 20.912l2.938-8.296L38.362 5.5l-2.938 8.296zm0 10.794l2.938-8.296l25.786-7.116l-2.938 8.296zm0 10.794l2.938-8.295l25.786-7.117l-2.938 8.296z");
}
</style><path class="nrjuacb9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:raven"} {...others} />);
}

export default Component;
