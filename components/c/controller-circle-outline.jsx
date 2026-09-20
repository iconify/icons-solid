import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-_jb_bun.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t-_jb_bun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:controller-circle-outline"} {...others} />);
}

export default Component;
