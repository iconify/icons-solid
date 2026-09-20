import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f0f03ubam.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f0f03ubam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:namur-out-of-spec-filled"} {...others} />);
}

export default Component;
