import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_q0t1ebv.css';
import '../../css/o/o5xttwudf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c_q0t1ebv"/><path class="o5xttwudf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:notepad-plus-plus-light"} {...others} />);
}

export default Component;
