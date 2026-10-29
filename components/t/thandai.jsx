import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yi9rmyb3c.css';
import '../../css/y/y_y-zf_4n.css';
import '../../css/i/i9k9okbgz.css';
import '../../css/c/c4rbxub1x.css';
import '../../css/r/rxwdebcpq.css';
import '../../css/m/m1o094bqo.css';
import '../../css/l/lhm6rqbam.css';
import '../../css/h/hd5-lbkqw.css';
import '../../css/z/z1jbs6bev.css';
import '../../css/k/km5agkbom.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow yi9rmyb3c"/><path class="wm-k y_y-zf_4n"/><path class="i9k9okbgz wm-k"/><path class="c4rbxub1x wm-k"/><path class="rxwdebcpq wm-k"/><path class="m1o094bqo wm-k"/><path class="lhm6rqbam wm-shine"/><path class="hd5-lbkqw wm-a"/><path class="wm-a z1jbs6bev"/><path class="km5agkbom wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:thandai"} {...others} />);
}

export default Component;
