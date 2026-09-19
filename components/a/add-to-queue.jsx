import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/crmd8sbmm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="crmd8sbmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:add-to-queue"} {...others} />);
}

export default Component;
