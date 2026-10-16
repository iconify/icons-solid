import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hm-ms1i2h.css';
import '../../css/x/xe4qnpbmz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hm-ms1i2h"/><path class="xe4qnpbmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pipe-cross-20"} {...others} />);
}

export default Component;
