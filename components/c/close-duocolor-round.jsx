import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqn4ig7kg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kqn4ig7kg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:close-duocolor-round"} {...others} />);
}

export default Component;
