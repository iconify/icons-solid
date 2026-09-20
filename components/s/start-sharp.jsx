import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp4ljwb8m {
  fill: currentColor;
  d: path("M3 17.5v-11h1v11zm12.712-.212l-.714-.688l4.1-4.1H6.385v-1h12.694l-4.056-4.1l.689-.688L21 12z");
}
</style><path class="gp4ljwb8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:start-sharp"} {...others} />);
}

export default Component;
