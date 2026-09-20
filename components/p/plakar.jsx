import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x2zp5lmjm.css';
import '../../css/s/sx1z59bsv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x2zp5lmjm"/><path class="sx1z59bsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:plakar"} {...others} />);
}

export default Component;
