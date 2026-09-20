import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vvs2ubbmn.css';
import '../../css/a/au4p_eikh.css';
import '../../css/o/ovxbe7lut.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vvs2ubbmn"/><path class="au4p_eikh"/><path class="ovxbe7lut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:typing"} {...others} />);
}

export default Component;
