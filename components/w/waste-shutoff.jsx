import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t96pnzc8w.css';
import '../../css/u/u_xjdzb_l.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="t96pnzc8w"/><path class="u_xjdzb_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:waste-shutoff"} {...others} />);
}

export default Component;
