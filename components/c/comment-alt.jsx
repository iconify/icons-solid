import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jaj0pkbxd.css';

const viewBox = {"width":1179,"height":1000};
const content = `<path class="jaj0pkbxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"websymbol:comment-alt"} {...others} />);
}

export default Component;
