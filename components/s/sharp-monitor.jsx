import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zdzxtab2f {
  fill: currentColor;
  d: path("M22 3H2v15h5l-1 1v2h12v-2l-1-1h5zm-2 13H4V5h16z");
}
</style><path class="zdzxtab2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-monitor"} {...others} />);
}

export default Component;
