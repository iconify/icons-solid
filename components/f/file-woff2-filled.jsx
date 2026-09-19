import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fg9m1iqrv.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="fg9m1iqrv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:file-woff2-filled"} {...others} />);
}

export default Component;
