import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nmdukbb3i {
  fill: currentColor;
  d: path("M17.812 17.289L7.712 7.208V16.5h-1v-11h11v1H8.419L18.5 16.6z");
}
</style><path class="nmdukbb3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:arrow-insert-outline"} {...others} />);
}

export default Component;
