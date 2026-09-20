import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aqasqsbwy.css';
import '../../css/o/o2hcozbvp.css';
import '../../css/k/k3_a_wb4n.css';
import '../../css/q/q07vckb0v.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="aqasqsbwy"/><path clip-rule="evenodd" class="o2hcozbvp"/><path class="k3_a_wb4n"/><path class="q07vckb0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:bow-tie"} {...others} />);
}

export default Component;
