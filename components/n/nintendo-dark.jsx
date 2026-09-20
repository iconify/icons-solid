import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h37dk2a9p.css';

const viewBox = {"width":405.1,"height":100};
const content = `<path class="h37dk2a9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:nintendo-dark"} {...others} />);
}

export default Component;
