import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ir2h2kauu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ir2h2kauu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:circle-arrow-left"} {...others} />);
}

export default Component;
