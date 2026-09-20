import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qjc1npbxs.css';
import '../../css/s/saj3nzkks.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qjc1npbxs"/><path class="saj3nzkks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:frappe-builder"} {...others} />);
}

export default Component;
