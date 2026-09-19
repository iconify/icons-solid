import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8s26pbah.css';
import '../../css/s/s07htpbtb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x8s26pbah"/><path class="s07htpbtb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:hurricane"} {...others} />);
}

export default Component;
