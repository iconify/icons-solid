import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwyekn-8b.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="jwyekn-8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:conifer-tree-beside-oval-broadleaved-tree"} {...others} />);
}

export default Component;
