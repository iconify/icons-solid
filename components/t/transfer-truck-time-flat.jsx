import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wj-99gbco.css';
import '../../css/z/zz6x5l5er.css';
import '../../css/o/oto99gbki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wj-99gbco"/><path clip-rule="evenodd" class="zz6x5l5er"/><path class="oto99gbki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:transfer-truck-time-flat"} {...others} />);
}

export default Component;
