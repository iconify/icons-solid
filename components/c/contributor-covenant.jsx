import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_q5fvoit.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w_q5fvoit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:contributor-covenant"} {...others} />);
}

export default Component;
