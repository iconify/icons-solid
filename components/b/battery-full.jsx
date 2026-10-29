import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbgyxebnx.css';
import '../../css/r/rgh57kbim.css';
import '../../css/r/rucc6dwql.css';
import '../../css/i/iheflch2n.css';
import '../../css/l/ljceg_bfh.css';
import '../../css/a/anr1hgdji.css';
import '../../css/s/sg-m6-bmf.css';
import '../../css/p/pdkkg_w0o.css';
import '../../css/l/lsv5_vg8u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bbgyxebnx wm-shadow"/><path class="rgh57kbim wm-k"/><path class="rucc6dwql wm-k"/><path class="iheflch2n wm-a"/><path class="ljceg_bfh wm-a"/><path class="anr1hgdji wm-k"/><path class="sg-m6-bmf wm-k"/><path class="pdkkg_w0o wm-k"/><path class="lsv5_vg8u wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:battery-full"} {...others} />);
}

export default Component;
