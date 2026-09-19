import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-mth8bqt.css';
import '../../css/r/r7nu-ofod.css';
import '../../css/y/yk60_vm2p.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="g-mth8bqt"><path class="r7nu-ofod"/><path class="yk60_vm2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:copyright"} {...others} />);
}

export default Component;
