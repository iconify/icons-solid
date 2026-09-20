import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nhg495fle.css';
import '../../css/z/zk3ynnbfa.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nhg495fle"/><path class="zk3ynnbfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-yarn"} {...others} />);
}

export default Component;
