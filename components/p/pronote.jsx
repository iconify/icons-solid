import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/twtj5ebts.css';
import '../../css/y/yg0gmx-wy.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="twtj5ebts"/><path class="yg0gmx-wy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pronote"} {...others} />);
}

export default Component;
