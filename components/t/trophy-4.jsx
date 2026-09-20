import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vufce9byw.css';
import '../../css/t/tbofzubjt.css';
import '../../css/i/iqc2m-baa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vufce9byw"/><path class="tbofzubjt"/><path class="iqc2m-baa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:trophy-4"} {...others} />);
}

export default Component;
