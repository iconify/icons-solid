import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gtin1i1qt.css';
import '../../css/m/mcs845b1a.css';
import '../../css/h/h9-sbybbi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gtin1i1qt"/><path class="mcs845b1a"/><path class="h9-sbybbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:webcam-bold-duotone"} {...others} />);
}

export default Component;
