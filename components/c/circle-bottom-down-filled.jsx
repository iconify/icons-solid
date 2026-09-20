import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a2pqnabsm.css';
import '../../css/o/o7_zbclrn.css';
import '../../css/t/tjq12i1zh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a2pqnabsm"/><path clip-rule="evenodd" class="o7_zbclrn"/><path class="tjq12i1zh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:circle-bottom-down-filled"} {...others} />);
}

export default Component;
