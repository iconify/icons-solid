import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kb79k96ib.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="kb79k96ib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:microphone-alt-slash"} {...others} />);
}

export default Component;
