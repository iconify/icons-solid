import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vxx8ae6fm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vxx8ae6fm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:android-subway"} {...others} />);
}

export default Component;
