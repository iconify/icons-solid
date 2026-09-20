import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/n/nf6zy_b6r.css';
import '../../css/i/ib4i6xbuw.css';
import '../../css/v/va1rmwb-p.css';
import '../../css/b/bgj5plv4s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="nf6zy_b6r"/><path class="ib4i6xbuw"/><path class="va1rmwb-p"/><path class="bgj5plv4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:arhive-alt-add-list"} {...others} />);
}

export default Component;
