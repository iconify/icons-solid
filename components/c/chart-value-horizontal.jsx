import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/agfkxsk5a.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="agfkxsk5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:chart-value-horizontal"} {...others} />);
}

export default Component;
