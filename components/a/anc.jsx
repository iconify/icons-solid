import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u9ou3fpyy.css';
import '../../css/c/cq_4pmbzu.css';
import '../../css/u/umr51jx_i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u9ou3fpyy"/><path class="cq_4pmbzu"/><path clip-rule="evenodd" class="umr51jx_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:anc"} {...others} />);
}

export default Component;
