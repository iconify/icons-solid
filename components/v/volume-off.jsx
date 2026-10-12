import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qylfpj-0m.css';
import '../../css/p/p9b4vhmdm.css';
import '../../css/s/si5by1jrj.css';
import '../../css/q/qws7ylbxp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qylfpj-0m"/><path class="p9b4vhmdm"/><path class="si5by1jrj"/><path class="qws7ylbxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:volume-off"} {...others} />);
}

export default Component;
