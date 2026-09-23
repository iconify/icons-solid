import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vv4dbmbfr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vv4dbmbfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:crowbarr"} {...others} />);
}

export default Component;
