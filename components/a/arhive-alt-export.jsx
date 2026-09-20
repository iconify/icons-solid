import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/k/k1ec6vbbe.css';
import '../../css/m/mr4ysib0c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="k1ec6vbbe"/><path class="mr4ysib0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:arhive-alt-export"} {...others} />);
}

export default Component;
