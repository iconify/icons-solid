import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/w/wujwvnahd.css';
import '../../css/x/xuyahubhm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="wujwvnahd"/><path class="xuyahubhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:sort-down"} {...others} />);
}

export default Component;
