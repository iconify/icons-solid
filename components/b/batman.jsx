import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yyxar1duk.css';
import '../../css/t/troui9b3i.css';
import '../../css/q/qgspc2bqu.css';
import '../../css/y/yhddlztib.css';
import '../../css/z/zr4hskbpm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yyxar1duk"/><path class="troui9b3i"/><path class="qgspc2bqu"/><path class="yhddlztib"/><path class="zr4hskbpm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:batman"} {...others} />);
}

export default Component;
