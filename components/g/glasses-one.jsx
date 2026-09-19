import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/q4tnseqel.css';
import '../../css/f/fm6catbms.css';
import '../../css/y/yngjwbcke.css';
import '../../css/v/vydv_p53t.css';
import '../../css/o/o6jqt2bpm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><circle class="q4tnseqel"/><circle transform="matrix(-1 0 0 1 33.5 24.5)" class="fm6catbms"/><path class="yngjwbcke"/><path class="vydv_p53t"/><path class="o6jqt2bpm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:glasses-one"} {...others} />);
}

export default Component;
