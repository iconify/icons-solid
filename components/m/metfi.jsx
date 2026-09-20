import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpg0t8u7t.css';
import '../../css/c/ccmwlvz2m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wpg0t8u7t"/><path class="ccmwlvz2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:metfi"} {...others} />);
}

export default Component;
