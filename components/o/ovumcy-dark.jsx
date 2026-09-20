import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fh61nybyw.css';
import '../../css/m/mr6m4lb-z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fh61nybyw"/><path class="mr6m4lb-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ovumcy-dark"} {...others} />);
}

export default Component;
