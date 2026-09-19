import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tc-c1bbea.css';
import '../../css/z/zrkdwxohg.css';
import '../../css/r/rij442pdg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tc-c1bbea"/><circle class="zrkdwxohg"/><path class="rij442pdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:square-question"} {...others} />);
}

export default Component;
