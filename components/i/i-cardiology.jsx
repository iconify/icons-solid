import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ms1ycbcfl.css';
import '../../css/l/ln5q-fheg.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="ms1ycbcfl"/><path class="ln5q-fheg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-cardiology"} {...others} />);
}

export default Component;
