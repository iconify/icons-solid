import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c479rxbrg.css';
import '../../css/p/p6r4tepqn.css';
import '../../css/v/vewokfb1e.css';
import '../../css/h/huuajhmrh.css';
import '../../css/q/q-sw5wljy.css';
import '../../css/n/n3p190nsa.css';
import '../../css/g/g34ovh4su.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="c479rxbrg"/><path class="p6r4tepqn"/><path class="vewokfb1e"/><circle class="huuajhmrh"/><path class="q-sw5wljy"/><path class="n3p190nsa"/><path class="g34ovh4su"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:winking-face-with-tongue"} {...others} />);
}

export default Component;
