import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2v24ccdv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="h2v24ccdv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:table-density-compact"} {...others} />);
}

export default Component;
