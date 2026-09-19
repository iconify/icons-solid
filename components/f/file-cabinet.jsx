import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y9ilysrmm.css';
import '../../css/s/sdsa7ebus.css';
import '../../css/l/lag853b2l.css';
import '../../css/q/qd3s6w-_h.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="y9ilysrmm"/><path class="sdsa7ebus"/><path class="lag853b2l"/><path class="qd3s6w-_h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:file-cabinet"} {...others} />);
}

export default Component;
