import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hxjl0ocxo.css';
import '../../css/j/jy2zvs-bn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hxjl0ocxo"/><path class="jy2zvs-bn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:marker"} {...others} />);
}

export default Component;
