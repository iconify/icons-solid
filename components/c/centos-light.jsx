import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-brn9h0g.css';
import '../../css/k/kceoj0bsx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x-brn9h0g"/><path class="kceoj0bsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:centos-light"} {...others} />);
}

export default Component;
