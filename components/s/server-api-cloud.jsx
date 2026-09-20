import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bk44c3j1d.css';
import '../../css/s/sf98jwb3i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bk44c3j1d"/><path class="sf98jwb3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:server-api-cloud"} {...others} />);
}

export default Component;
