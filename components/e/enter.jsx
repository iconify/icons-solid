import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ciwhunbto.css';
import '../../css/c/c3l2dyibj.css';

const viewBox = {"width":25,"height":25};
const content = `<path class="ciwhunbto"/><path class="c3l2dyibj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:enter"} {...others} />);
}

export default Component;
