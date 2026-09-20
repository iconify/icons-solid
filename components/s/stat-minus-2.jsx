import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.htsz9iwyu {
  fill: currentColor;
  d: path("m12 18.27l-5.308-5.308l.708-.708l4.6 4.594l4.6-4.594l.708.707zm0-5.962L6.692 7l.708-.708l4.6 4.595l4.6-4.595l.708.708z");
}
</style><path class="htsz9iwyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:stat-minus-2"} {...others} />);
}

export default Component;
