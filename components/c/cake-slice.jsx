import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzci_0zyo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pzci_0zyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:cake-slice"} {...others} />);
}

export default Component;
