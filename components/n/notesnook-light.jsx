import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-_vu6g8t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y-_vu6g8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:notesnook-light"} {...others} />);
}

export default Component;
