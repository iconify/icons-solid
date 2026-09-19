import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hk1mzua3o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hk1mzua3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:assembly-arm"} {...others} />);
}

export default Component;
