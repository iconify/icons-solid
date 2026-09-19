import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1-nasbzp.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="v1-nasbzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:volume-outline"} {...others} />);
}

export default Component;
