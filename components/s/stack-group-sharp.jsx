import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w6_jge8fm {
  fill: currentColor;
  d: path("M8 22v-6H2V2h14v6h6v14z");
}
</style><path class="w6_jge8fm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stack-group-sharp"} {...others} />);
}

export default Component;
