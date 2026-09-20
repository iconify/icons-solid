import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hp948_bll.css';
import '../../css/i/ib8s1i8wi.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hp948_bll"/><path class="ib8s1i8wi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-gitea-open"} {...others} />);
}

export default Component;
