import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j-z99rbkh.css';
import '../../css/s/sj2wpqb8i.css';
import '../../css/t/tkn4_ibhf.css';
import '../../css/y/y3q0d4a1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="j-z99rbkh"/><path class="sj2wpqb8i"/><path class="tkn4_ibhf"/><path class="y3q0d4a1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:home-wifi2-duotone"} {...others} />);
}

export default Component;
