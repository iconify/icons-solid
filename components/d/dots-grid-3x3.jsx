import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxg0rzbgs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yxg0rzbgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:dots-grid-3x3"} {...others} />);
}

export default Component;
