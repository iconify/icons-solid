import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvkz5rbsj.css';
import '../../css/h/hzy4kud9a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vvkz5rbsj"/><path class="hzy4kud9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:arrow-circle-right"} {...others} />);
}

export default Component;
