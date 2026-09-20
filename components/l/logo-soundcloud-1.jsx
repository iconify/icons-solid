import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wryaqu8dm.css';
import '../../css/v/vbv8sqv-o.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wryaqu8dm"/><path class="vbv8sqv-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:logo-soundcloud-1"} {...others} />);
}

export default Component;
