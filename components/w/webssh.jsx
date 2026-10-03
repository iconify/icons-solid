import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/awb4th6dw.css';
import '../../css/i/iapyejbey.css';
import '../../css/u/uy1ty_mkg.css';
import '../../css/i/ic9cgybam.css';
import '../../css/l/lgqfcjhjs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="awb4th6dw"/><circle class="iapyejbey"/><circle class="uy1ty_mkg"/><circle class="ic9cgybam"/><path class="lgqfcjhjs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:webssh"} {...others} />);
}

export default Component;
