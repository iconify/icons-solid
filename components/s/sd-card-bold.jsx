import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nwpfvq7kt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nwpfvq7kt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sd-card-bold"} {...others} />);
}

export default Component;
