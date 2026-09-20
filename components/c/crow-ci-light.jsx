import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i73vyxe7x.css';
import '../../css/n/nbm911b0e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i73vyxe7x"/><path class="nbm911b0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:crow-ci-light"} {...others} />);
}

export default Component;
