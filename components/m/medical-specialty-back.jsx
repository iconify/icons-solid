import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v_ka0nboq.css';
import '../../css/f/fvm7rxpzh.css';
import '../../css/e/e4b09vbdc.css';
import '../../css/y/yg1d9sbfc.css';
import '../../css/o/of81nrbbu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v_ka0nboq"/><path class="fvm7rxpzh"/><path class="e4b09vbdc"/><path class="yg1d9sbfc"/><path class="of81nrbbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:medical-specialty-back"} {...others} />);
}

export default Component;
