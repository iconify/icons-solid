import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2fuemo5t.css';
import '../../css/t/tvuc3h5zy.css';
import '../../css/a/amudyvb1b.css';
import '../../css/q/qv0ny4dca.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n2fuemo5t"/><path class="tvuc3h5zy"/><path class="amudyvb1b"/><path class="qv0ny4dca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:window-section"} {...others} />);
}

export default Component;
