import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/loar4lb6y.css';
import '../../css/e/e2xx18l_k.css';
import '../../css/w/wyzkygbfw.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="loar4lb6y"/><path class="e2xx18l_k"/><path class="wyzkygbfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:servarr"} {...others} />);
}

export default Component;
