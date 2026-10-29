import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxs67wbpu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cxs67wbpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:octagon-x-solid"} {...others} />);
}

export default Component;
