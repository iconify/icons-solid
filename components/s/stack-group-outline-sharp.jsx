import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jc7luvbbj {
  fill: currentColor;
  d: path("M8 22v-6H2V2h14v6h6v14zm2-2h10V10h-6V4H4v10h6zm2-8");
}
</style><path class="jc7luvbbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stack-group-outline-sharp"} {...others} />);
}

export default Component;
