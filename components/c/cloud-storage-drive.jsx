import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x_do2zbgo.css';
import '../../css/m/mfad4jbqu.css';
import '../../css/h/hajfi2icj.css';
import '../../css/l/lkfkk6b1i.css';
import '../../css/m/mf5mjp-mg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x_do2zbgo"/><path class="mfad4jbqu"/><path class="hajfi2icj"/><path class="lkfkk6b1i"/><path class="mf5mjp-mg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:cloud-storage-drive"} {...others} />);
}

export default Component;
