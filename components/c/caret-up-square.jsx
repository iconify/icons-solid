import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vb-ee9b3j.css';
import '../../css/i/ijg5zh-jo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vb-ee9b3j"/><path class="ijg5zh-jo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:caret-up-square"} {...others} />);
}

export default Component;
