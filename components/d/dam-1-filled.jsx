import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bms8p0b3r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bms8p0b3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:dam-1-filled"} {...others} />);
}

export default Component;
