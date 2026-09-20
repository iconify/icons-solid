import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eg-9lqb3k.css';
import '../../css/e/eyga40b8r.css';
import '../../css/p/p1y1we2cu.css';
import '../../css/u/ujbdo19su.css';
import '../../css/u/uymgdabjo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="eg-9lqb3k"/><path class="eyga40b8r"/><path class="p1y1we2cu"/><path class="ujbdo19su"/><path class="uymgdabjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:hand-with-fingers-splayed-2"} {...others} />);
}

export default Component;
