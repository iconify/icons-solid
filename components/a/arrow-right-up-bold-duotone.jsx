import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mp8cnibtf.css';
import '../../css/g/g95h_vbdc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mp8cnibtf"/><path class="g95h_vbdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-right-up-bold-duotone"} {...others} />);
}

export default Component;
