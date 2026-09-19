import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9g6vrjtx.css';

const viewBox = {"width":1113,"height":1000};
const content = `<path class="a9g6vrjtx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"websymbol:attention"} {...others} />);
}

export default Component;
