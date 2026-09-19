import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ntkigeb7i.css';

const viewBox = {"width":1000,"height":1000};
const content = `<path class="ntkigeb7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"websymbol:cw-circle"} {...others} />);
}

export default Component;
