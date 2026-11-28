import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3skl530n.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sbm9b5tlm.css';
import '../../css/k/k7ctk0cpn.css';
import '../../css/i/i5obohb9e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j3skl530n secondary"/><g class="dt0cm9dhy primary"><path class="sbm9b5tlm"/><path class="k7ctk0cpn"/><path class="i5obohb9e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:whistle-duo"} {...others} />);
}

export default Component;
