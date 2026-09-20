import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/w/wzpu635fi.css';
import '../../css/a/a6w_7yipg.css';
import '../../css/d/de4vrqhvr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="wzpu635fi"/><path class="a6w_7yipg"/><path class="de4vrqhvr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-tab-manager-logo"} {...others} />);
}

export default Component;
