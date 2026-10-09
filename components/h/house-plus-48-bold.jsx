import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/goie45bfg.css';
import '../../css/q/q87m_jinq.css';
import '../../css/i/it04kcbvr.css';
import '../../css/f/fdlxrep5d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="goie45bfg"/><path class="q87m_jinq"/><path class="it04kcbvr"/><path class="fdlxrep5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-plus-48-bold"} {...others} />);
}

export default Component;
