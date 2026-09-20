import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p51hcieek.css';
import '../../css/p/p680kacjm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p51hcieek"/><path class="p680kacjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:input-fill"} {...others} />);
}

export default Component;
