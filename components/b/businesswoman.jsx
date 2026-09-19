import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zw33xtbeb.css';
import '../../css/u/uopwe8brh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zw33xtbeb"/><path class="uopwe8brh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:businesswoman"} {...others} />);
}

export default Component;
