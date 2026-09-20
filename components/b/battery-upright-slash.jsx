import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajs8ko0tr.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="ajs8ko0tr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:battery-upright-slash"} {...others} />);
}

export default Component;
