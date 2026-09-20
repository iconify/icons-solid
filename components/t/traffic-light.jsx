import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/i/i1ujbstus.css';
import '../../css/b/bqa76j3gp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="i1ujbstus"/><path class="bqa76j3gp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:traffic-light"} {...others} />);
}

export default Component;
