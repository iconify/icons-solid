import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulflpqbng {
  fill: currentColor;
  d: path("M8 19v-3h6v-2.5H9v-3h5V8H8V5h6q1.25 0 2.125.875T17 8v1.9q0 .875-.612 1.488T14.9 12q.875 0 1.488.613T17 14.1V16q0 1.25-.875 2.125T14 19z");
}
</style><path class="ulflpqbng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:timer-3"} {...others} />);
}

export default Component;
