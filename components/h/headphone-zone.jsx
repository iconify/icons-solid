import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-8xtcnba.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m-8xtcnba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:headphone-zone"} {...others} />);
}

export default Component;
