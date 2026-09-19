import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hic_gdiic.css';
import '../../css/p/pohcxhbiw.css';
import '../../css/r/r84b_cbic.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hic_gdiic"/><path class="pohcxhbiw"/><path class="r84b_cbic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:repeat-sharp"} {...others} />);
}

export default Component;
