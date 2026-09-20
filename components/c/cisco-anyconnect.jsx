import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9wu50bnx.css';
import '../../css/a/a__ik5b7b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j9wu50bnx"/><path class="a__ik5b7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:cisco-anyconnect"} {...others} />);
}

export default Component;
