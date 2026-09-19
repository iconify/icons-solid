import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ik16rebhe.css';
import '../../css/e/ekcn2ur9m.css';
import '../../css/i/i_cqwtblo.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ik16rebhe"/><path class="ekcn2ur9m"/><path class="i_cqwtblo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:streamlit"} {...others} />);
}

export default Component;
