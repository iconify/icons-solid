import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ka2i6jzed.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ka2i6jzed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:video-conference"} {...others} />);
}

export default Component;
