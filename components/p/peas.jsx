import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g1-1k5pbw.css';
import '../../css/s/skgu0jb8u.css';
import '../../css/h/hl_zaybjk.css';
import '../../css/l/lg5q9dd9r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGT9VwgbtK"><g class="ft5dv1b6b"><path class="g1-1k5pbw"/><path class="skgu0jb8u"/><circle class="hl_zaybjk"/><circle class="lg5q9dd9r"/></g></mask></defs><path mask="url(#SVGT9VwgbtK)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:peas"} {...others} />);
}

export default Component;
