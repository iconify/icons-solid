import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a4g54lbma {
  fill: currentColor;
  d: path("M23 3H1v16h7v2h8v-2h6.99zm-2 14H3V5h18z");
}
</style><path class="a4g54lbma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-tv"} {...others} />);
}

export default Component;
