import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o_pr89wos.css';
import '../../css/q/q_4wznbtz.css';
import '../../css/q/qgo8ugbdd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="o_pr89wos"/><path clip-rule="evenodd" class="q_4wznbtz"/><path clip-rule="evenodd" class="qgo8ugbdd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:dropper5"} {...others} />);
}

export default Component;
