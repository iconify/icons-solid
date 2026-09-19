import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-hvr0byb.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="d-hvr0byb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"academicons:dryad-square"} {...others} />);
}

export default Component;
