import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5evchskr.css';
import '../../css/q/qa0jhaboz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="a5evchskr"/><path class="qa0jhaboz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-utils"} {...others} />);
}

export default Component;
