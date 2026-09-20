import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/almky1j9k.css';
import '../../css/d/dbq485b4e.css';
import '../../css/o/ocif-h9bu.css';
import '../../css/j/juu6lxbqs.css';
import '../../css/o/oyjpvhbwn.css';
import '../../css/q/qyx7x3bpb.css';
import '../../css/o/owomm5jgl.css';
import '../../css/w/wx2ppdfep.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="almky1j9k"/><path class="dbq485b4e"/><path class="ocif-h9bu"/><path class="juu6lxbqs"/><path class="oyjpvhbwn"/><path class="qyx7x3bpb"/><path class="owomm5jgl"/><path class="wx2ppdfep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:disappointed-face"} {...others} />);
}

export default Component;
