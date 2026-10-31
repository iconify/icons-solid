import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/o/o1bscwjgq.css';
import '../../css/d/d5a_wibzk.css';
import '../../css/l/l4hgmv0nj.css';
import '../../css/w/w49ngccqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="o1bscwjgq"/><path class="d5a_wibzk wm-k"/><path class="l4hgmv0nj wm-a"/><path class="w49ngccqq wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:person-swimming"} {...others} />);
}

export default Component;
