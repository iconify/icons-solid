import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gmnc5x6pu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gmnc5x6pu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:union-solid"} {...others} />);
}

export default Component;
