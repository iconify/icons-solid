import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dd0hsobqz.css';
import '../../css/a/ao9n0fw-c.css';
import '../../css/s/s71-vlbwt.css';
import '../../css/y/yxkibnr-k.css';
import '../../css/y/yk-qtowid.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dd0hsobqz"/><path class="ao9n0fw-c"/><path class="s71-vlbwt"/><path class="yxkibnr-k"/><path class="yk-qtowid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:mobile-phone-text"} {...others} />);
}

export default Component;
