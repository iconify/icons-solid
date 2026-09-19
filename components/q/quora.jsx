import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wbk2lq5ev.css';

const viewBox = {"width":416,"height":504};
const content = `<path class="wbk2lq5ev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:quora"} {...others} />);
}

export default Component;
