import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xla7kib8f {
  fill: currentColor;
  d: path("M5 20v-6h3v6zm6 0V9h3v11z");
}
</style><path class="xla7kib8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:signal-cellular-alt-2-bar-sharp"} {...others} />);
}

export default Component;
