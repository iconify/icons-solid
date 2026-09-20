import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4cqtxb4q.css';
import '../../css/r/rrw1wrbfd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v4cqtxb4q"/><path class="rrw1wrbfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:volume-up"} {...others} />);
}

export default Component;
