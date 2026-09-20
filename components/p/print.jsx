import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0r5uinwc.css';
import '../../css/u/u1-hezbed.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u0r5uinwc"/><path class="u1-hezbed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:print"} {...others} />);
}

export default Component;
