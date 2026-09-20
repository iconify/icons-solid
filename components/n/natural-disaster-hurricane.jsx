import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lbdq4fm5a.css';
import '../../css/o/ocolrmbek.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lbdq4fm5a"/><path class="ocolrmbek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:natural-disaster-hurricane"} {...others} />);
}

export default Component;
