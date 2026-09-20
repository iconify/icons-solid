import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/f/fn278rt5p.css';
import '../../css/s/ss67y-bve.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="to-5kdesz"><path class="fn278rt5p"/><path class="ss67y-bve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:warranty-badge-highlight"} {...others} />);
}

export default Component;
