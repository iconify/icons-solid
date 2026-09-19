import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/axti0sr1w.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="axti0sr1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:y-combinator-square"} {...others} />);
}

export default Component;
