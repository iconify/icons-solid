import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/acrih_vdm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="acrih_vdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:layout-leftbar-close-line"} {...others} />);
}

export default Component;
