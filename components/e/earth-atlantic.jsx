import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d1jdi4cpo.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="d1jdi4cpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:earth-atlantic"} {...others} />);
}

export default Component;
