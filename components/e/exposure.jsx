import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zhq0ofb2s.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="zhq0ofb2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:exposure"} {...others} />);
}

export default Component;
