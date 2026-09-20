import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxko3fnvl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oxko3fnvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:panel-bottom-close-solid"} {...others} />);
}

export default Component;
