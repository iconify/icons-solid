import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nllgqdbww.css';
import '../../css/n/n15fx4bae.css';
import '../../css/p/pzg1f1ooj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="nllgqdbww"/><path class="n15fx4bae"/><path class="pzg1f1ooj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:compact-disk"} {...others} />);
}

export default Component;
