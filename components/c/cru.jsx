import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7tplmbgr.css';
import '../../css/j/jj8ei-gdy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b7tplmbgr"/><path class="jj8ei-gdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:cru"} {...others} />);
}

export default Component;
