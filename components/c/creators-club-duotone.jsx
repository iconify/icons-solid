import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djr3dcz0j.css';
import '../../css/z/zf5h5-ble.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="djr3dcz0j"/><path class="zf5h5-ble"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:creators-club-duotone"} {...others} />);
}

export default Component;
