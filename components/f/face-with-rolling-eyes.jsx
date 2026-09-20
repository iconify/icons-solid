import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/almky1j9k.css';
import '../../css/d/dbq485b4e.css';
import '../../css/o/ocif-h9bu.css';
import '../../css/s/s_f6m4b-b.css';
import '../../css/j/juu6lxbqs.css';
import '../../css/l/l9j2uxy4p.css';
import '../../css/k/kq5i8tbso.css';
import '../../css/n/ny6vwpc4h.css';
import '../../css/c/c8pt3xb-c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="almky1j9k"/><path class="dbq485b4e"/><path class="ocif-h9bu"/><path class="s_f6m4b-b"/><path class="juu6lxbqs"/><path class="l9j2uxy4p"/><path class="kq5i8tbso"/><path class="ny6vwpc4h"/><path class="c8pt3xb-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:face-with-rolling-eyes"} {...others} />);
}

export default Component;
