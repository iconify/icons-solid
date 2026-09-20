import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abw377k1s.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="abw377k1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:word-wrap-around-bounding-box-remix"} {...others} />);
}

export default Component;
