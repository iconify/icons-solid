import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v702yrfnr.css';
import '../../css/w/wxhtf4b2j.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v702yrfnr"/><path class="wxhtf4b2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-home-open"} {...others} />);
}

export default Component;
