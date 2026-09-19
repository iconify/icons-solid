import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ardbekbnv.css';
import '../../css/x/x7in55byl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ardbekbnv"/><path class="x7in55byl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:memo-pad"} {...others} />);
}

export default Component;
