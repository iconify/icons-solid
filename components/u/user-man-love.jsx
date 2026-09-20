import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/szxpzob-w.css';
import '../../css/n/nhk3unbbd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="szxpzob-w"/><path class="nhk3unbbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:user-man-love"} {...others} />);
}

export default Component;
