import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e4p4i7bft.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="e4p4i7bft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:nav-experiments"} {...others} />);
}

export default Component;
