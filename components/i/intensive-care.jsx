import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vq1py9j2j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vq1py9j2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:intensive-care"} {...others} />);
}

export default Component;
