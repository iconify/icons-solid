import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xm9_89bsm.css';
import '../../css/z/z6-pcfb-f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xm9_89bsm"/><path class="z6-pcfb-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nextcloud-mail-dark"} {...others} />);
}

export default Component;
