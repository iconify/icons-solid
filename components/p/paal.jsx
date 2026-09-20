import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qmd9_ci0l.css';
import '../../css/v/vv1m_xbuq.css';
import '../../css/g/gv-p15bpi.css';
import '../../css/l/lwb5uprkg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qmd9_ci0l"/><path class="vv1m_xbuq"/><path clip-rule="evenodd" class="gv-p15bpi"/><path class="lwb5uprkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:paal"} {...others} />);
}

export default Component;
