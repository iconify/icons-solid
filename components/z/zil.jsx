import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/huutwhbwj.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/v/vtcx3y0kx.css';
import '../../css/z/zarfnbe3g.css';
import '../../css/v/varsvhbkp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="huutwhbwj"/><g class="n1mjunbsu"><path class="vtcx3y0kx"/><path class="zarfnbe3g"/><path class="varsvhbkp"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:zil"} {...others} />);
}

export default Component;
