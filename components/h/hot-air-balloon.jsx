import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jx6yqbbhl.css';
import '../../css/s/smmxe_bdk.css';
import '../../css/h/hfshdjlhh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jx6yqbbhl"/><path class="smmxe_bdk"/><path class="hfshdjlhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:hot-air-balloon"} {...others} />);
}

export default Component;
