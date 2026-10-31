import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kwhs29cbl.css';
import '../../css/a/aeov-cc1v.css';
import '../../css/a/a1id-wbyl.css';
import '../../css/g/gcvqzu2um.css';
import '../../css/v/vt4_68blm.css';
import '../../css/j/jbvy6-bvz.css';
import '../../css/i/iu373j92f.css';
import '../../css/w/wc-4chlig.css';
import '../../css/h/hxpwbdbsh.css';
import '../../css/t/tzwt0wbim.css';
import '../../css/y/ylphfobxa.css';
import '../../css/i/iu34xzb8r.css';
import '../../css/g/gmo5ddo9p.css';
import '../../css/z/zybe5rsug.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kwhs29cbl wm-shadow"/><path class="aeov-cc1v wm-a"/><path class="a1id-wbyl wm-a"/><path class="gcvqzu2um wm-a"/><path class="vt4_68blm wm-shine"/><path class="jbvy6-bvz wm-k"/><path class="iu373j92f wm-k"/><path class="wc-4chlig wm-k"/><path class="hxpwbdbsh wm-k"/><path class="tzwt0wbim wm-shine"/><path class="wm-k ylphfobxa"/><path class="iu34xzb8r wm-k"/><path class="gmo5ddo9p wm-k"/><path class="wm-shine zybe5rsug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:gallery-horizontal"} {...others} />);
}

export default Component;
