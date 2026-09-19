import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_9-kogec.css';
import '../../css/c/ca5ecz53l.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="e_9-kogec"/><path class="ca5ecz53l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:fit-to-height"} {...others} />);
}

export default Component;
