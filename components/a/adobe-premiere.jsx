import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gv19kwmqr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gv19kwmqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:adobe-premiere"} {...others} />);
}

export default Component;
