import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nakc4kdbz.css';
import '../../css/w/wglt58box.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nakc4kdbz"/><path class="wglt58box"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:toggle-left-outline"} {...others} />);
}

export default Component;
