import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amszec7ov.css';
import '../../css/r/roxo8uutm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="amszec7ov"/><path class="roxo8uutm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:chevron-double-right-20"} {...others} />);
}

export default Component;
