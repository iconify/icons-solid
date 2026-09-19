import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5bs2jbns.css';

const viewBox = {"width":989,"height":1000};
const content = `<path class="t5bs2jbns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"websymbol:docs-landscape"} {...others} />);
}

export default Component;
