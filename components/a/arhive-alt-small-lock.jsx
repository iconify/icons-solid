import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/u/u1x-e7bql.css';
import '../../css/j/jdg3xy5_p.css';
import '../../css/l/le4gxtbee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="u1x-e7bql"/><path class="jdg3xy5_p"/><path class="le4gxtbee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:arhive-alt-small-lock"} {...others} />);
}

export default Component;
