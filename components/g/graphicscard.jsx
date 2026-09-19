import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lb4cbr40k.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="lb4cbr40k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:graphicscard"} {...others} />);
}

export default Component;
