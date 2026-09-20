import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q1rfw60cx {
  fill: currentColor;
  d: path("M1 20V10h4v6h14v-6h4v10zm6-6V8H4V4h16v4h-3v6z");
}
</style><path class="q1rfw60cx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:weekend-sharp"} {...others} />);
}

export default Component;
