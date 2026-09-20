import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xeeqhccob {
  fill: currentColor;
  d: path("M2 15v-2h5v2zm0-4V9h19v2zm7 4v-2h5v2zm7 0v-2h5v2z");
}
</style><path class="xeeqhccob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:power-input"} {...others} />);
}

export default Component;
