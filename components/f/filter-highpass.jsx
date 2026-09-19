import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f62sy9bfc.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="f62sy9bfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:filter-highpass"} {...others} />);
}

export default Component;
