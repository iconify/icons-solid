import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cn5qf3ihp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cn5qf3ihp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:jupiterone"} {...others} />);
}

export default Component;
