import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sm-9bbu2i.css';
import '../../css/w/wqk418y-d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sm-9bbu2i"/><path class="wqk418y-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:ticket"} {...others} />);
}

export default Component;
