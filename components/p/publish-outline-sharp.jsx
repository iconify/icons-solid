import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.usox12bez {
  fill: currentColor;
  d: path("M11.5 19v-8.65l-2.33 2.33l-.708-.718L12 8.423l3.539 3.539l-.708.719L12.5 10.35V19zM5 9.039V5h14v4.039h-1V6H6v3.039z");
}
</style><path class="usox12bez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:publish-outline-sharp"} {...others} />);
}

export default Component;
