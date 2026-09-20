import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8krip7dh.css';
import '../../css/y/yapqosbxq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n8krip7dh"/><path class="yapqosbxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:archive"} {...others} />);
}

export default Component;
