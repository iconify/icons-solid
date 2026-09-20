import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/knod1mnja.css';
import '../../css/f/f8da0bkqt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="knod1mnja"/><path class="f8da0bkqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:proton-mail-light"} {...others} />);
}

export default Component;
