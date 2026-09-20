import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/osaojrbhq.css';
import '../../css/k/k8dl_z2ek.css';
import '../../css/o/o9tkm69yu.css';
import '../../css/b/beqndpwid.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="osaojrbhq"/><path class="k8dl_z2ek"/><path class="o9tkm69yu"/><path class="beqndpwid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nodemailer"} {...others} />);
}

export default Component;
