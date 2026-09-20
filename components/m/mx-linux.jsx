import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yn6g9f1_l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yn6g9f1_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:mx-linux"} {...others} />);
}

export default Component;
