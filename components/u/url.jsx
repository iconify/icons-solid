import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ryq49vj0z.css';
import '../../css/i/iz9ll_bww.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ryq49vj0z"/><path class="iz9ll_bww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:url"} {...others} />);
}

export default Component;
