import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hi0fjj9vp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hi0fjj9vp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uiw:file-unknown"} {...others} />);
}

export default Component;
