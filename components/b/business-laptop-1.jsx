import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/k/k5ssipv8t.css';
import '../../css/t/txypl8bnr.css';
import '../../css/p/p8byw9pyu.css';
import '../../css/g/gq-eyxb-r.css';
import '../../css/d/dj7o5pbgx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="k5ssipv8t"/><path class="txypl8bnr"/><path class="p8byw9pyu"/><path class="gq-eyxb-r"/><path class="dj7o5pbgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:business-laptop-1"} {...others} />);
}

export default Component;
