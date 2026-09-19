import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/idwstqb7m.css';

const viewBox = {"width":512,"height":448};
const content = `<path class="idwstqb7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:mail-back"} {...others} />);
}

export default Component;
