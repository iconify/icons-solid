import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6dpq6bos.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e6dpq6bos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:flatnotes-dark"} {...others} />);
}

export default Component;
