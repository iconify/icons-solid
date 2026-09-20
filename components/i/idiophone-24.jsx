import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yd9tkcbou.css';
import '../../css/g/gwgec4uya.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yd9tkcbou"/><path class="gwgec4uya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:idiophone-24"} {...others} />);
}

export default Component;
