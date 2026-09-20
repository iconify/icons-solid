import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/utdbd58xq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="utdbd58xq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:puzzle-edit-outline"} {...others} />);
}

export default Component;
