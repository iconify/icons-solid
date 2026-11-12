import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ojhppjb7h.css';
import '../../css/k/kg6y88b8h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ojhppjb7h"/><path class="kg6y88b8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:initiative-project-management-light"} {...others} />);
}

export default Component;
