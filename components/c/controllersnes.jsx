import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqrb4r1qy.css';

const viewBox = {"width":1024,"height":614};
const content = `<path class="vqrb4r1qy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:controllersnes"} {...others} />);
}

export default Component;
