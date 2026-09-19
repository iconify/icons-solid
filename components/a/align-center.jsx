import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zz3gffb2n.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="zz3gffb2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:align-center"} {...others} />);
}

export default Component;
