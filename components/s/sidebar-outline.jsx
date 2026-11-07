import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dl5fqjbjy.css';
import '../../css/o/o4ra4ubat.css';
import '../../css/m/mjz7_5-6d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dl5fqjbjy"/><path class="o4ra4ubat"/><path clip-rule="evenodd" class="mjz7_5-6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sidebar-outline"} {...others} />);
}

export default Component;
