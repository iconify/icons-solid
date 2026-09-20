import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejl9-ctos.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ejl9-ctos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:canonical-landscape"} {...others} />);
}

export default Component;
