import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ak5e5k5fa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ak5e5k5fa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:helmet-head-shot"} {...others} />);
}

export default Component;
