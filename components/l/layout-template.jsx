import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzgeyjwmg.css';
import '../../css/r/r0i2nmbpf.css';
import '../../css/r/rdv65ibcl.css';
import '../../css/a/ajlu13b3x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gzgeyjwmg wm-k"/><path class="r0i2nmbpf wm-k"/><path class="rdv65ibcl wm-k"/><path class="ajlu13b3x wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:layout-template"} {...others} />);
}

export default Component;
