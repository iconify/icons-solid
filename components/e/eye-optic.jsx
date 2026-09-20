import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/l00-rybzk.css';
import '../../css/x/xmwezmwym.css';
import '../../css/n/ng94ilydm.css';
import '../../css/b/b7lw5jbys.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="l00-rybzk"/><path class="xmwezmwym"/><path class="ng94ilydm"/><path class="b7lw5jbys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:eye-optic"} {...others} />);
}

export default Component;
