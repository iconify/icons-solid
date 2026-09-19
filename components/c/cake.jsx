import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ioyfii6ga.css';
import '../../css/i/iwbr0cuek.css';
import '../../css/u/u_qlszbyq.css';
import '../../css/p/p577_yzwq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ioyfii6ga"/><path class="iwbr0cuek"/><circle class="u_qlszbyq"/><path class="p577_yzwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cake"} {...others} />);
}

export default Component;
