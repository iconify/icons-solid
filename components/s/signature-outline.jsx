import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qc6jqwb5o.css';
import '../../css/s/sdwkc8bim.css';
import '../../css/m/mc_00bbvz.css';
import '../../css/d/d__c5-_bb.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qc6jqwb5o"/><path class="sdwkc8bim"/><path clip-rule="evenodd" class="mc_00bbvz"/><path class="d__c5-_bb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:signature-outline"} {...others} />);
}

export default Component;
