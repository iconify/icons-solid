import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fnxf5iqlo.css';

const viewBox = {"width":469,"height":512};
const content = `<path class="fnxf5iqlo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:ansible-alt"} {...others} />);
}

export default Component;
