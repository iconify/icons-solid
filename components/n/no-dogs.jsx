import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p3t5tecsn.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="p3t5tecsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:no-dogs"} {...others} />);
}

export default Component;
