import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xowvf-_hp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xowvf-_hp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:home-sharp"} {...others} />);
}

export default Component;
