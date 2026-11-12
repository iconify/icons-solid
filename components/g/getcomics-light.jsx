import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hexzpob7k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hexzpob7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:getcomics-light"} {...others} />);
}

export default Component;
