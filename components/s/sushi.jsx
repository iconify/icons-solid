import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxdb5_76z.css';
import '../../css/m/mq0bfxeqb.css';
import '../../css/f/fy61_f-vm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nxdb5_76z"/><path clip-rule="evenodd" class="mq0bfxeqb"/><path class="fy61_f-vm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:sushi"} {...others} />);
}

export default Component;
