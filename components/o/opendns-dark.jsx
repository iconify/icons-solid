import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xxsv4ab9t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xxsv4ab9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:opendns-dark"} {...others} />);
}

export default Component;
