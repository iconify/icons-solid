import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqc-2tjjs.css';
import '../../css/i/ix9txabgz.css';
import '../../css/o/opf7hobje.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kqc-2tjjs"/><path class="ix9txabgz"/><path class="opf7hobje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:email-envelope-open"} {...others} />);
}

export default Component;
