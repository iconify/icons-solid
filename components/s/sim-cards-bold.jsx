import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxkkglg1b.css';
import '../../css/n/n32zpyb_v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nxkkglg1b"/><path clip-rule="evenodd" class="n32zpyb_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sim-cards-bold"} {...others} />);
}

export default Component;
