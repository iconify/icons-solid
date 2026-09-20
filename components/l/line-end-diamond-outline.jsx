import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r4z3iqbqb {
  fill: currentColor;
  d: path("M15 16.175L19.175 12L15 7.825L10.825 12zM15 19l-6-6H2v-2h7l6-6l7 7zm0-7");
}
</style><path class="r4z3iqbqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:line-end-diamond-outline"} {...others} />);
}

export default Component;
