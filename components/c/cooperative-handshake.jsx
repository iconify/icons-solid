import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/c/cyvnnmo9u.css';
import '../../css/w/wknpfcc8q.css';
import '../../css/e/eef1hht1c.css';
import '../../css/p/pzzbdibft.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="cyvnnmo9u"/><path class="wknpfcc8q"/><path class="eef1hht1c"/><path class="pzzbdibft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cooperative-handshake"} {...others} />);
}

export default Component;
