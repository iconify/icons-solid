import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvi7xvb6g.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="nvi7xvb6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:clipboard-check"} {...others} />);
}

export default Component;
