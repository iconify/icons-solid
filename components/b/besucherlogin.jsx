import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/um7_4ac7p.css';
import '../../css/k/kfueumbyk.css';
import '../../css/p/p98w-ymbv.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="um7_4ac7p"/><rect class="kfueumbyk"/><path class="p98w-ymbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:besucherlogin"} {...others} />);
}

export default Component;
