import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6utrpw_h.css';
import '../../css/x/xsh4i5c4p.css';
import '../../css/y/yeop5qy3t.css';
import '../../css/n/nr09n6bhy.css';
import '../../css/h/hlct72b9l.css';
import '../../css/m/m894aobql.css';
import '../../css/g/gte_8tbak.css';
import '../../css/p/pobksn-kd.css';
import '../../css/j/jm23e_bqs.css';
import '../../css/a/abas2-bte.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v6utrpw_h wm-shadow"/><path class="wm-k xsh4i5c4p"/><path class="wm-k yeop5qy3t"/><path class="nr09n6bhy wm-k"/><path class="hlct72b9l wm-k"/><path class="m894aobql wm-shine"/><path class="gte_8tbak wm-a"/><path class="pobksn-kd wm-a"/><path class="jm23e_bqs wm-a"/><path class="abas2-bte wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:language"} {...others} />);
}

export default Component;
