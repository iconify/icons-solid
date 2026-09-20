import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rxsbpt71g {
  fill: currentColor;
  d: path("M2 19v-9l4-4h1V4h2v2h9l4 4v9zm14-2h4v-6.175l-2-2l-2 2zM4 17h10v-5H4z");
}
</style><path class="rxsbpt71g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:gite-sharp"} {...others} />);
}

export default Component;
