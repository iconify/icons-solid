import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkqk8irly.css';
import '../../css/c/cypjnfb0r.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="gkqk8irly"/><path class="cypjnfb0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:unlock"} {...others} />);
}

export default Component;
