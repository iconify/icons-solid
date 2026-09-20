import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zrjfcpy9k.css';
import '../../css/q/q1tpt7fzn.css';
import '../../css/l/lh3843bbm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zrjfcpy9k"/><path class="q1tpt7fzn"/><path class="lh3843bbm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:sushi-chopsticks"} {...others} />);
}

export default Component;
