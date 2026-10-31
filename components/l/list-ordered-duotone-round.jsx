import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdf4o6ifl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rdf4o6ifl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:list-ordered-duotone-round"} {...others} />);
}

export default Component;
