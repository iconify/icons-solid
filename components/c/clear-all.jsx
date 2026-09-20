import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xnre-0bwl {
  fill: currentColor;
  d: path("M4 15.885v-1h12.25v1zM5.866 12.5v-1h12.25v1zM7.75 9.116v-1H20v1z");
}
</style><path class="xnre-0bwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:clear-all"} {...others} />);
}

export default Component;
