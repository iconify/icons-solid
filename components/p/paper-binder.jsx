import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/up728wbje.css';
import '../../css/q/qq-uqkb6o.css';
import '../../css/s/sym-c2v1r.css';
import '../../css/o/olz-i8b2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="up728wbje"/><path class="qq-uqkb6o"/><path class="sym-c2v1r"/><path class="olz-i8b2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:paper-binder"} {...others} />);
}

export default Component;
