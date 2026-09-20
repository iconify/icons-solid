import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-7q2l6ez.css';

const viewBox = {"width":700,"height":700,"left":-30,"top":-94};
const content = `<path class="g-7q2l6ez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:snowpack"} {...others} />);
}

export default Component;
