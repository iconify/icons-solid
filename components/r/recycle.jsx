import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uqz7rkbbi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uqz7rkbbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:recycle"} {...others} />);
}

export default Component;
