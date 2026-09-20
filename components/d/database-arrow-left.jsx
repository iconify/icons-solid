import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtkvy1_xk.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="vtkvy1_xk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:database-arrow-left"} {...others} />);
}

export default Component;
