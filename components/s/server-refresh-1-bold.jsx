import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gyw7qtbor.css';
import '../../css/g/g-an08bkq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gyw7qtbor"/><path class="g-an08bkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:server-refresh-1-bold"} {...others} />);
}

export default Component;
