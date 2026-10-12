import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wen_a-b4j.css';
import '../../css/m/myuaap4gp.css';
import '../../css/c/cdjndmybd.css';
import '../../css/m/m1ktd-bef.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wen_a-b4j"/><path class="myuaap4gp"/><path class="cdjndmybd"/><path class="m1ktd-bef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:tree-palm"} {...others} />);
}

export default Component;
