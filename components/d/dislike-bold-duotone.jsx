import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wo0q5ob3i.css';
import '../../css/v/vj8wfhhvy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wo0q5ob3i"/><path clip-rule="evenodd" class="vj8wfhhvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dislike-bold-duotone"} {...others} />);
}

export default Component;
