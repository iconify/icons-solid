import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nb5kviydn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vj3ytwxdm.css';
import '../../css/o/op0-e7whw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nb5kviydn secondary"/><g class="dt0cm9dhy primary"><path class="vj3ytwxdm"/><path class="op0-e7whw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:pickaxe-duo"} {...others} />);
}

export default Component;
