import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnfnpw1di.css';

const viewBox = {"width":405.1,"height":100};
const content = `<path class="rnfnpw1di"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:nintendo-light"} {...others} />);
}

export default Component;
