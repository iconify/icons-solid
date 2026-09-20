import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1268k_zf.css';
import '../../css/y/ypft5mbdm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="w1268k_zf"/><path class="ypft5mbdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:phone-locked-fill"} {...others} />);
}

export default Component;
