import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w03xrr2fc.css';

const viewBox = {"width":1063,"height":1000};
const content = `<path class="w03xrr2fc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"websymbol:heart"} {...others} />);
}

export default Component;
