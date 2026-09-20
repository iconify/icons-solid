import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x8tnhzbwg {
  fill: currentColor;
  d: path("M5 20v-6h3v6zm6 0V9h3v11zm6 0V4h3v16z");
}
</style><path class="x8tnhzbwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:signal-cellular-alt-sharp"} {...others} />);
}

export default Component;
