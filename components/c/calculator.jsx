import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e0-ck1g3u.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="e0-ck1g3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-line-icons:calculator"} {...others} />);
}

export default Component;
