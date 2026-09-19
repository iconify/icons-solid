import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2oc1ljfc.css';
import '../../css/o/olpmu-5dh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n2oc1ljfc"/><path class="olpmu-5dh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:link-filled"} {...others} />);
}

export default Component;
