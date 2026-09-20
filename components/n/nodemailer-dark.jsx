import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cfwn5dffv.css';
import '../../css/m/muqokkksd.css';
import '../../css/v/vydu3dknt.css';
import '../../css/k/kut4grbpb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cfwn5dffv"/><path class="muqokkksd"/><path class="vydu3dknt"/><path class="kut4grbpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nodemailer-dark"} {...others} />);
}

export default Component;
