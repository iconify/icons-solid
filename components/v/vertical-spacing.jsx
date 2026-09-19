import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmysp-c4c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rmysp-c4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:vertical-spacing"} {...others} />);
}

export default Component;
