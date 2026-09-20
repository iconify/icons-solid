import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dx7r04gac.css';
import '../../css/g/gu0pejb-c.css';
import '../../css/u/um7la21si.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dx7r04gac"/><path class="gu0pejb-c"/><path clip-rule="evenodd" class="um7la21si"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:flash-warning-flat"} {...others} />);
}

export default Component;
