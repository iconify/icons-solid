import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yg4w013as.css';
import '../../css/z/z0xcrnbqr.css';

const viewBox = {"width":65,"height":64};
const content = `<path class="yg4w013as"/><path class="z0xcrnbqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-imaging-alternative-pet"} {...others} />);
}

export default Component;
