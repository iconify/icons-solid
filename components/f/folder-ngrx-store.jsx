import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n36vjab5v.css';
import '../../css/r/rkl8em2wf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="n36vjab5v"/><path class="rkl8em2wf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-ngrx-store"} {...others} />);
}

export default Component;
