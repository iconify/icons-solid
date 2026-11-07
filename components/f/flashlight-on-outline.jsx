import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghtf89dkg.css';
import '../../css/b/bjgohipju.css';
import '../../css/l/lu24cmbkp.css';
import '../../css/o/oj2nvrb7f.css';
import '../../css/y/y3zm_elhs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ghtf89dkg"/><path clip-rule="evenodd" class="bjgohipju"/><path class="lu24cmbkp"/><path class="oj2nvrb7f"/><path class="y3zm_elhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flashlight-on-outline"} {...others} />);
}

export default Component;
