import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h14yaqw0b.css';

const viewBox = {"width":23,"height":24};
const content = `<path class="h14yaqw0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:step-backwrad"} {...others} />);
}

export default Component;
