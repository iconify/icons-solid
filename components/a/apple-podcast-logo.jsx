import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/q/qtlkgac4v.css';
import '../../css/o/o02ofuo8o.css';
import '../../css/e/eel50ebch.css';
import '../../css/s/swaykybso.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="qtlkgac4v"/><path class="o02ofuo8o"/><path class="eel50ebch"/><path class="swaykybso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:apple-podcast-logo"} {...others} />);
}

export default Component;
