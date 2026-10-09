import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xt_zhw2mi.css';
import '../../css/i/i_3ks9poz.css';
import '../../css/q/qbyv8qirk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xt_zhw2mi"/><path class="i_3ks9poz"/><path class="qbyv8qirk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plug-20-bold"} {...others} />);
}

export default Component;
