import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/apucl2q8b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="apucl2q8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:pocket-radio"} {...others} />);
}

export default Component;
