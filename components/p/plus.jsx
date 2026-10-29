import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iis1bcc9c.css';
import '../../css/j/jyoh2bcls.css';
import '../../css/l/lb7evabyl.css';
import '../../css/g/gppyxfbsu.css';
import '../../css/j/jpnldbbsr.css';
import '../../css/k/kg8_k7jys.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iis1bcc9c wm-shadow"/><path class="jyoh2bcls wm-k"/><path class="lb7evabyl wm-k"/><path class="gppyxfbsu wm-k"/><path class="jpnldbbsr wm-k"/><path class="kg8_k7jys wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:plus"} {...others} />);
}

export default Component;
