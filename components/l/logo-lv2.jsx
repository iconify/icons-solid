import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wwyhitiii.css';
import '../../css/h/h4iijgblw.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="n1lsf0bnc"><path class="wwyhitiii"/><path class="h4iijgblw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:logo-lv2"} {...others} />);
}

export default Component;
