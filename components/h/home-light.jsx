import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6or-hf8r.css';
import '../../css/u/ux5vwpivn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t6or-hf8r"/><path class="ux5vwpivn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:home-light"} {...others} />);
}

export default Component;
