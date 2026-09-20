import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/for76ebml.css';

const viewBox = {"width":24,"height":24};
const content = `<path vector-effect="non-scaling-stroke" class="for76ebml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:unlock"} {...others} />);
}

export default Component;
