import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c_m1ktm7j {
  fill: currentColor;
  d: path("M5.077 19.5v-15h1v15zm12.846 0v-7H8.846v-1h9.077v-7h1v15z");
}
</style><path class="c_m1ktm7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:format-text-clip-sharp"} {...others} />);
}

export default Component;
