import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xye7cnqaq.css';
import '../../css/j/j06c4gncv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xye7cnqaq"/><path class="j06c4gncv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:arc"} {...others} />);
}

export default Component;
