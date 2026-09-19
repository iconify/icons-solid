import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8xdcxd-z.css';

const viewBox = {"width":1664,"height":1664};
const content = `<path class="t8xdcxd-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:wrench"} {...others} />);
}

export default Component;
