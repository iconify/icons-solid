import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hyjq3ibzx.css';
import '../../css/j/j3qz157fz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hyjq3ibzx"/><path class="j3qz157fz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:mail"} {...others} />);
}

export default Component;
