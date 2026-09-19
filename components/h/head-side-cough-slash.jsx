import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8h17jlhi.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="c8h17jlhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:head-side-cough-slash"} {...others} />);
}

export default Component;
