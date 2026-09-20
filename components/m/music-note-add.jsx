import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b8qnbnbga {
  fill: currentColor;
  d: path("M9.175 19.825Q8 18.65 8 17t1.175-2.825T12 13q.575 0 1.063.138t.937.412V3h6v4h-4v10q0 1.65-1.175 2.825T12 21t-2.825-1.175M7 11V8H4V6h3V3h2v3h3v2H9v3z");
}
</style><path class="b8qnbnbga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:music-note-add"} {...others} />);
}

export default Component;
