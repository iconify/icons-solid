import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/n/nvl9l1wej.css';
import '../../css/f/fvfdntbhp.css';
import '../../css/d/dadt2hb4t.css';
import '../../css/h/hr1e7hbij.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="nvl9l1wej"/><path class="fvfdntbhp"/><path class="dadt2hb4t"/><path class="hr1e7hbij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:dark-dislay-mode"} {...others} />);
}

export default Component;
