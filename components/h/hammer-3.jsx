import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/i/i_3s7_bnf.css';
import '../../css/r/ryp317iba.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="i_3s7_bnf"/><path class="ryp317iba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:hammer-3"} {...others} />);
}

export default Component;
