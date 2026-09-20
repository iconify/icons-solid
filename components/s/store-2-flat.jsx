import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mj1sgobgc.css';
import '../../css/u/uad3khkvn.css';
import '../../css/d/d9j68j1zf.css';
import '../../css/j/jrqrxdbeg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mj1sgobgc"/><path class="uad3khkvn"/><path clip-rule="evenodd" class="d9j68j1zf"/><path class="jrqrxdbeg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:store-2-flat"} {...others} />);
}

export default Component;
