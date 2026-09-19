import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfttfe_2y.css';
import '../../css/x/xwqlguw3x.css';
import '../../css/p/pn1ylfbdq.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="qfttfe_2y"><path class="xwqlguw3x"/><path class="pn1ylfbdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:ms-excel"} {...others} />);
}

export default Component;
