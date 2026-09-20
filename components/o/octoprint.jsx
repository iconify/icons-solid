import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hadxb356p.css';
import '../../css/o/o8jdmjbti.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hadxb356p"/><path class="o8jdmjbti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:octoprint"} {...others} />);
}

export default Component;
