import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnj339csp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nnj339csp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:chart-bar-alt"} {...others} />);
}

export default Component;
