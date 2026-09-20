import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n6jc5cliy.css';
import '../../css/k/ki04fs54m.css';
import '../../css/f/f60ws5rzi.css';
import '../../css/r/rpuozwbux.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="n6jc5cliy"/><path class="ki04fs54m"/><path class="f60ws5rzi"/><path class="rpuozwbux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:app-window-link"} {...others} />);
}

export default Component;
