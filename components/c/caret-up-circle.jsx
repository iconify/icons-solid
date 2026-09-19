import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwibdw4bb.css';
import '../../css/i/ijg5zh-jo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bwibdw4bb"/><path class="ijg5zh-jo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:caret-up-circle"} {...others} />);
}

export default Component;
