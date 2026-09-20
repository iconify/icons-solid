import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yfefkwblm.css';
import '../../css/s/sed_2ie9m.css';
import '../../css/v/vohjxacrj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yfefkwblm"/><path clip-rule="evenodd" class="sed_2ie9m"/><path class="vohjxacrj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:calculator-1-flat"} {...others} />);
}

export default Component;
