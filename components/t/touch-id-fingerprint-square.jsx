import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qq8jt4b6k.css';
import '../../css/l/l9e25dwus.css';
import '../../css/c/ca-i72ida.css';
import '../../css/p/phkzaqbtd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qq8jt4b6k"/><path class="l9e25dwus"/><path class="ca-i72ida"/><path class="phkzaqbtd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:touch-id-fingerprint-square"} {...others} />);
}

export default Component;
