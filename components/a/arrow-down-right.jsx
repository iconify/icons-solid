import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4q2x981q.css';
import '../../css/x/xg4x14bqu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l4q2x981q"/><path class="xg4x14bqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:arrow-down-right"} {...others} />);
}

export default Component;
