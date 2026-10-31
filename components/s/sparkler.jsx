import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exwrc0-ch.css';
import '../../css/r/rjj3met0u.css';
import '../../css/f/fvuh3ob5a.css';
import '../../css/z/zk26odb_o.css';
import '../../css/w/wp11mj91f.css';
import '../../css/d/ds9tw5bzi.css';
import '../../css/i/i_mzhyuvk.css';
import '../../css/g/gbnxtxb9k.css';
import '../../css/b/b_-lhfobj.css';
import '../../css/s/shpfhxb2q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="exwrc0-ch"><path class="rjj3met0u wm-shadow"/><path class="fvuh3ob5a wm-shadow"/><path class="wm-shadow zk26odb_o"/><path class="wm-shadow wp11mj91f"/><path class="ds9tw5bzi wm-shadow"/><path class="i_mzhyuvk wm-shadow"/><path class="gbnxtxb9k wm-k"/><path class="b_-lhfobj wm-a"/><path class="shpfhxb2q wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:sparkler"} {...others} />);
}

export default Component;
