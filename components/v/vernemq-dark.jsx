import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0d80ubpb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b0d80ubpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:vernemq-dark"} {...others} />);
}

export default Component;
