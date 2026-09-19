import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/w/w0l95_bea.css';
import '../../css/v/vlf9sc5tl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="w0l95_bea"/><path class="vlf9sc5tl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:shield-add"} {...others} />);
}

export default Component;
