import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bt2msqyjo.css';
import '../../css/i/i_f0vibzj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="bt2msqyjo"/><path class="i_f0vibzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:american-football"} {...others} />);
}

export default Component;
