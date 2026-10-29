import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/az496hjvu.css';
import '../../css/z/zi6tnccid.css';
import '../../css/v/vzibu2b_i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="az496hjvu"/><path class="zi6tnccid"/><path class="vzibu2b_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-pull-request-sketch"} {...others} />);
}

export default Component;
