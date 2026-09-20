import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qkno46xxx.css';
import '../../css/y/ynvevlbvy.css';
import '../../css/f/fkib2bh7q.css';
import '../../css/m/mgqj16b7m.css';
import '../../css/q/qt0zi6vdr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qkno46xxx"/><path class="ynvevlbvy"/><path class="fkib2bh7q"/><path class="mgqj16b7m"/><path class="qt0zi6vdr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:lamp-3"} {...others} />);
}

export default Component;
