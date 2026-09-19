import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6hh1sbhp.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="x6hh1sbhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:document-search-stroke-12"} {...others} />);
}

export default Component;
