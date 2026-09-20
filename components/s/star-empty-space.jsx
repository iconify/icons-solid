import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4k2mib2z.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="t4k2mib2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:star-empty-space"} {...others} />);
}

export default Component;
