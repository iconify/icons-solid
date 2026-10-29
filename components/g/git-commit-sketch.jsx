import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/o5leul9ao.css';
import '../../css/p/p4bxscbjk.css';
import '../../css/z/zuqzax3uu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="o5leul9ao"/><path class="p4bxscbjk"/><path class="zuqzax3uu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-commit-sketch"} {...others} />);
}

export default Component;
