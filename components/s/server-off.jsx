import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/m/m3zoi6b-m.css';
import '../../css/k/kyy1txe6b.css';
import '../../css/k/kk0onebow.css';
import '../../css/a/aq_2o7bhr.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="m3zoi6b-m"/><path class="kyy1txe6b wm-shine"/><path class="kk0onebow wm-k"/><path class="aq_2o7bhr wm-a"/><path class="qr4ochb5c wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:server-off"} {...others} />);
}

export default Component;
