import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/ceg-gk3sq.css';
import '../../css/x/xgp37yvic.css';
import '../../css/b/biir-xbeu.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ceg-gk3sq"/><path class="xgp37yvic"/><path class="biir-xbeu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:presentation-podium-notes"} {...others} />);
}

export default Component;
