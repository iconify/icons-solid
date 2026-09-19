import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2zq3k1ko.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="t2zq3k1ko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:razor"} {...others} />);
}

export default Component;
