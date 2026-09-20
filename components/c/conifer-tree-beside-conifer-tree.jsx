import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zm4js56by.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="zm4js56by"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:conifer-tree-beside-conifer-tree"} {...others} />);
}

export default Component;
