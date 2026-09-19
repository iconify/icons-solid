import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ico7ur4iz.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="ico7ur4iz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:parentheses-fill-12"} {...others} />);
}

export default Component;
