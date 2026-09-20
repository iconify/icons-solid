import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q68w_ab7t.css';
import '../../css/q/qf2lu78as.css';
import '../../css/r/rm-3m8roz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q68w_ab7t"/><path class="qf2lu78as"/><path class="rm-3m8roz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:barcode-1"} {...others} />);
}

export default Component;
