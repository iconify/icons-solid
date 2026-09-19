import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nb61fbftd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nb61fbftd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:envelope-closed"} {...others} />);
}

export default Component;
