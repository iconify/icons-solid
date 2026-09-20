import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6k6c5bss.css';
import '../../css/s/sa4jv-b7i.css';
import '../../css/q/qq3vuebmi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s6k6c5bss"/><circle class="sa4jv-b7i"/><path class="qq3vuebmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:credit-card-duotone"} {...others} />);
}

export default Component;
