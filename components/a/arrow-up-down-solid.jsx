import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d1wcavb4j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d1wcavb4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:arrow-up-down-solid"} {...others} />);
}

export default Component;
