import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lxn_06esw.css';
import '../../css/z/zq5w5wbjl.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="lxn_06esw"/><path class="zq5w5wbjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:twitter"} {...others} />);
}

export default Component;
