import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aqhi9hx0g.css';

const viewBox = {"width":1185,"height":1000};
const content = `<path class="aqhi9hx0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"websymbol:reply"} {...others} />);
}

export default Component;
