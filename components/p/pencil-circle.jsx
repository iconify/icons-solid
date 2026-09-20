import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/o/og2zrldks.css';
import '../../css/b/byqu_j-nh.css';
import '../../css/z/zcurbcz2r.css';
import '../../css/v/vdzwjcbcs.css';
import '../../css/s/skooppb3c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="og2zrldks"/><path class="byqu_j-nh"/><path class="zcurbcz2r"/><path class="vdzwjcbcs"/><path class="skooppb3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:pencil-circle"} {...others} />);
}

export default Component;
