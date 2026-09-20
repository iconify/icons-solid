import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wjtrot2-f.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wjtrot2-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:sort-right"} {...others} />);
}

export default Component;
