import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/na6dr8byy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="na6dr8byy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:surveyjs-light"} {...others} />);
}

export default Component;
