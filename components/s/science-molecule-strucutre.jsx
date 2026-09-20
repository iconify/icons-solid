import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vicux7euw.css';
import '../../css/h/h2h7ntlaq.css';
import '../../css/u/u3ul26h3f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vicux7euw"/><path class="h2h7ntlaq"/><path class="u3ul26h3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:science-molecule-strucutre"} {...others} />);
}

export default Component;
