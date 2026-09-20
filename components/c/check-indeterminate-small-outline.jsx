import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fq-aohbnb {
  fill: currentColor;
  d: path("M7 12.5v-1h10v1z");
}
</style><path class="fq-aohbnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:check-indeterminate-small-outline"} {...others} />);
}

export default Component;
