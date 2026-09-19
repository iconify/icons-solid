import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m6y2cacwd.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="m6y2cacwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:poi-alt-o"} {...others} />);
}

export default Component;
