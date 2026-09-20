import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f35jv97gg {
  fill: currentColor;
  d: path("M6.189 17.289L5.5 16.6L15.58 6.5H6.289v-1h11v11h-1V7.208z");
}
</style><path class="f35jv97gg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:arrow-outward"} {...others} />);
}

export default Component;
