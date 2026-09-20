import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dhz9xx3hp.css';
import '../../css/w/wb8gpybsf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dhz9xx3hp"/><path class="wb8gpybsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:download"} {...others} />);
}

export default Component;
