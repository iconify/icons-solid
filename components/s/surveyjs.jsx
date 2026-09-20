import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4kqh8bxz.css';
import '../../css/e/ep6tlrbos.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p4kqh8bxz"/><path class="ep6tlrbos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:surveyjs"} {...others} />);
}

export default Component;
