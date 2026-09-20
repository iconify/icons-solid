import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uy8p_j7ge.css';
import '../../css/b/b6eiwkb2v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uy8p_j7ge"/><circle class="b6eiwkb2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:user-rights-rtl"} {...others} />);
}

export default Component;
