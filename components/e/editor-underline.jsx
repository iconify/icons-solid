import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1_sbqmea.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="t1_sbqmea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:editor-underline"} {...others} />);
}

export default Component;
