import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ct-exp8sn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ct-exp8sn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uiw:circle-close-o"} {...others} />);
}

export default Component;
