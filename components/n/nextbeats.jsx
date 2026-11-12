import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zew7-c2gj.css';
import '../../css/v/vea0ry4ig.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zew7-c2gj"/><path class="vea0ry4ig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nextbeats"} {...others} />);
}

export default Component;
