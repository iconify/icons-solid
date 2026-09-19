import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ay_iqabxu {
  fill: currentColor;
  d: path("M12 2c-4.2 0-8 3.22-8 8.2c0 3.32 2.67 7.25 8 11.8c5.33-4.55 8-8.48 8-11.8C20 5.22 16.2 2 12 2m1 13h-2v-2h2zm0-4h-2V6h2z");
}
</style><path class="ay_iqabxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-fmd-bad"} {...others} />);
}

export default Component;
