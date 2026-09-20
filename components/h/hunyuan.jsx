import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pcdt_kyqm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pcdt_kyqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:hunyuan"} {...others} />);
}

export default Component;
