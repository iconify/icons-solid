import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gsjj6nxig.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gsjj6nxig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:calculator-alt"} {...others} />);
}

export default Component;
