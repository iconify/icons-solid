import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxg--r65y.css';
import '../../css/a/acs4rfber.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pxg--r65y"/><path class="acs4rfber"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:oxt"} {...others} />);
}

export default Component;
