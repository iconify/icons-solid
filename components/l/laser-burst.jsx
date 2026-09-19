import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9s3b7bjq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n9s3b7bjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:laser-burst"} {...others} />);
}

export default Component;
