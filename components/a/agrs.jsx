import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in6jc3bsu.css';
import '../../css/z/z46kgibda.css';
import '../../css/p/p4x9h9btd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="in6jc3bsu"/><path class="z46kgibda"/><path class="p4x9h9btd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:agrs"} {...others} />);
}

export default Component;
