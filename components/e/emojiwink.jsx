import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exj4j4izy.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="exj4j4izy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:emojiwink"} {...others} />);
}

export default Component;
