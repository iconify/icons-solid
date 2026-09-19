import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xqgo0nb7v.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="xqgo0nb7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:layerorder"} {...others} />);
}

export default Component;
