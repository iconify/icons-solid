import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/i/in9jczbza.css';
import '../../css/r/r4yd2n9lx.css';
import '../../css/u/ugq8j8bfc.css';
import '../../css/m/mvhmx0b5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="in9jczbza"/><path class="r4yd2n9lx"/><path class="ugq8j8bfc"/><path class="mvhmx0b5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:3d-sync"} {...others} />);
}

export default Component;
