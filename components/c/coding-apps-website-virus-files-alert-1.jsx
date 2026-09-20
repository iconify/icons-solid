import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/ts7_i983q.css';
import '../../css/t/tqmktlbva.css';
import '../../css/f/f-ckj9y-r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ts7_i983q"/><path class="tqmktlbva"/><path class="f-ckj9y-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:coding-apps-website-virus-files-alert-1"} {...others} />);
}

export default Component;
