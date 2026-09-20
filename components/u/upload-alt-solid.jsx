import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j28299b9j.css';
import '../../css/v/vvnnjvbmq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j28299b9j"/><path class="vvnnjvbmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:upload-alt-solid"} {...others} />);
}

export default Component;
