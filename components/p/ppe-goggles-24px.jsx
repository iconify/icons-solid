import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/alc589sng.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="alc589sng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ppe-goggles-24px"} {...others} />);
}

export default Component;
