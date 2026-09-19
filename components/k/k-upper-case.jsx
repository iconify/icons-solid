import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/csg_4pb1f.css';

const viewBox = {"width":491,"height":735};
const content = `<path class="csg_4pb1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:k-upper-case"} {...others} />);
}

export default Component;
