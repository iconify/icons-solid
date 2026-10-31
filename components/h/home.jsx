import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/h22q30bqx.css';
import '../../css/s/s6tfabbgr.css';
import '../../css/o/o10udcbvt.css';
import '../../css/j/jrfguabyy.css';
import '../../css/c/c13-7f6ca.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="h22q30bqx wm-shadow"/><path class="s6tfabbgr wm-shadow"/><path class="o10udcbvt"/><path class="jrfguabyy"/><path class="c13-7f6ca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:home"} {...others} />);
}

export default Component;
