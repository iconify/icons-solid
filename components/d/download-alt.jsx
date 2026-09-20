import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wgmsu_7-o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wgmsu_7-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:download-alt"} {...others} />);
}

export default Component;
