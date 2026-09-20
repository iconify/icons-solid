import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfti8x3ha.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="hfti8x3ha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:magnifying-glass-for-search-ui"} {...others} />);
}

export default Component;
