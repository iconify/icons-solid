import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/w/w2qwfjjgf.css';
import '../../css/n/ny7lf8h0w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="w2qwfjjgf"/><path class="ny7lf8h0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:ticket-alt"} {...others} />);
}

export default Component;
