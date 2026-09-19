import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nkqj6j90v.css';
import '../../css/h/hlsy3c2kt.css';
import '../../css/g/gyevrrb6e.css';
import '../../css/z/z2na20gje.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="nkqj6j90v"/><path class="hlsy3c2kt"/><circle class="gyevrrb6e"/><circle class="z2na20gje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:school-bell-01"} {...others} />);
}

export default Component;
