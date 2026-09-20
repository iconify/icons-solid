import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itq-opb1z.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="itq-opb1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:arrowright2"} {...others} />);
}

export default Component;
