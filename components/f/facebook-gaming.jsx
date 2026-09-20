import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oc4uod5nx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oc4uod5nx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:facebook-gaming"} {...others} />);
}

export default Component;
