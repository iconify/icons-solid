import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yqh16pv3v.css';
import '../../css/q/qxuya4bvt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yqh16pv3v"/><path class="qxuya4bvt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-proto"} {...others} />);
}

export default Component;
