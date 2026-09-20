import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/msnernbby.css';
import '../../css/q/qw35iee-y.css';
import '../../css/s/s4kdj5j1y.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/b/bw1cmbb3h.css';
import '../../css/y/y5m0rdbxf.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="msnernbby"/><path class="qw35iee-y"/><path class="s4kdj5j1y"/><g class="jn8qy4bru"><path class="bw1cmbb3h"/><path class="y5m0rdbxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:rock"} {...others} />);
}

export default Component;
