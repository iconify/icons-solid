import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l8acl6bbl.css';
import '../../css/e/e0x3z6bdm.css';
import '../../css/o/onca1cc_d.css';
import '../../css/e/eg32iv0xh.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="l8acl6bbl"/><path class="e0x3z6bdm"/><path class="onca1cc_d"/><path class="eg32iv0xh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:tape-cassette-record"} {...others} />);
}

export default Component;
