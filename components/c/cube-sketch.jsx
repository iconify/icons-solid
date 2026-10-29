import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wu7n7fbvu.css';
import '../../css/a/a-p3vpbvu.css';
import '../../css/e/efj4m1bby.css';
import '../../css/w/wnh8xqb5r.css';
import '../../css/d/dd0jd4bgv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wu7n7fbvu"/><path class="a-p3vpbvu wm-k"/><path class="efj4m1bby wm-a"/><path class="wm-k wnh8xqb5r"/><path class="dd0jd4bgv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cube-sketch"} {...others} />);
}

export default Component;
