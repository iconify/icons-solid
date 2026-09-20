import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n--j2qhfp {
  fill: currentColor;
  d: path("M4 17V7h2v8h3V7h2v10zm9 0v-3h2v1h3v-2h-5V7h7v3h-2V9h-3v2h5v6z");
}
</style><path class="n--j2qhfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:language-us-outline-sharp"} {...others} />);
}

export default Component;
