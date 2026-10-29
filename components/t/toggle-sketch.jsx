import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gi6w2mh5t.css';
import '../../css/i/i7vap8bao.css';
import '../../css/r/r49sd0bbi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="gi6w2mh5t"/><path class="i7vap8bao wm-k"/><circle class="r49sd0bbi wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:toggle-sketch"} {...others} />);
}

export default Component;
