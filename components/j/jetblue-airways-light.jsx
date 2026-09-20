import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8-i4fffi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o8-i4fffi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:jetblue-airways-light"} {...others} />);
}

export default Component;
