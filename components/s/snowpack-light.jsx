import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etyfe9bzz.css';

const viewBox = {"width":700,"height":700,"left":-30,"top":-94};
const content = `<path class="etyfe9bzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:snowpack-light"} {...others} />);
}

export default Component;
