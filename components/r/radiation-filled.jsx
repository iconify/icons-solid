import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2k121bbm.css';
import '../../css/k/k7eocp4md.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i2k121bbm"/><path class="k7eocp4md"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:radiation-filled"} {...others} />);
}

export default Component;
