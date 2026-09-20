import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukvws-bxw.css';
import '../../css/o/oyua62bvb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ukvws-bxw"/><path class="oyua62bvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-repository"} {...others} />);
}

export default Component;
