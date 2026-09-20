import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fm4k82bbn {
  fill: currentColor;
  d: path("M25.25 5.25a1.25 1.25 0 1 0-2.5 0v32.446L10.141 24.874a1.25 1.25 0 1 0-1.782 1.752l14.75 15a1.25 1.25 0 0 0 1.782 0l14.75-15a1.25 1.25 0 1 0-1.782-1.752L25.25 37.696z");
}
</style><path class="fm4k82bbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-down-48-regular"} {...others} />);
}

export default Component;
