import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/af0ksw-nw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="af0ksw-nw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:gauss"} {...others} />);
}

export default Component;
