import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqtgn03gm.css';
import '../../css/w/wu13qac7h.css';
import '../../css/y/yk60_vm2p.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="tqtgn03gm"><path class="wu13qac7h"/><path class="yk60_vm2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:registered"} {...others} />);
}

export default Component;
