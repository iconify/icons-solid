import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w0y89tbzd.css';
import '../../css/r/rgodfd-6c.css';
import '../../css/y/yg9i12q6z.css';
import '../../css/e/epkyxc_ih.css';
import '../../css/h/hadveenji.css';
import '../../css/w/wb38jkbxf.css';
import '../../css/p/pmr6po49l.css';
import '../../css/i/i38mixyxu.css';
import '../../css/r/rgg12ptjq.css';
import '../../css/f/fm1llobsb.css';
import '../../css/e/e67sv0tjg.css';
import '../../css/h/hdpdygsqb.css';
import '../../css/g/giz6obb4b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w0y89tbzd wm-shadow"/><path class="rgodfd-6c wm-a"/><path class="wm-a yg9i12q6z"/><path class="epkyxc_ih wm-a"/><path class="hadveenji wm-a"/><path class="wb38jkbxf wm-a"/><path class="pmr6po49l wm-a"/><path class="i38mixyxu wm-k"/><path class="rgg12ptjq wm-k"/><path class="fm1llobsb wm-k"/><path class="e67sv0tjg wm-k"/><path class="hdpdygsqb wm-k"/><path class="giz6obb4b wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:signature"} {...others} />);
}

export default Component;
