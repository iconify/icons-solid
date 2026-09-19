import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4sfmobcd.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="r4sfmobcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:baby-outline"} {...others} />);
}

export default Component;
