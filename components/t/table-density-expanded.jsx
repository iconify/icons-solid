import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y87ybjbjt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="y87ybjbjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:table-density-expanded"} {...others} />);
}

export default Component;
