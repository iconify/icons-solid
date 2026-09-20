import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fhxhq9bmo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fhxhq9bmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-horizontal-spacing-outline"} {...others} />);
}

export default Component;
