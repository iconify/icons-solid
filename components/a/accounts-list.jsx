import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/ssr9qfzls.css';

const viewBox = {"width":472,"height":384};
const content = `<path class="ssr9qfzls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:accounts-list"} {...others} />);
}

export default Component;
