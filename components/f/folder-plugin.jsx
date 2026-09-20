import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nhg495fle.css';
import '../../css/y/ykmbv_xzn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nhg495fle"/><path class="ykmbv_xzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-plugin"} {...others} />);
}

export default Component;
