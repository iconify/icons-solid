import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/py2_t-39j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="py2_t-39j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:spiral-hilt"} {...others} />);
}

export default Component;
