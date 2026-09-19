import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wzzgv3b1m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wzzgv3b1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:kitchen-tools-filled"} {...others} />);
}

export default Component;
