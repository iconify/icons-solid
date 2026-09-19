import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xsq7xeoxm.css';

const viewBox = {"width":1000,"height":1000};
const content = `<path class="xsq7xeoxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"websymbol:progress-3"} {...others} />);
}

export default Component;
