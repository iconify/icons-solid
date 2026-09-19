import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uk40dd1ao.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uk40dd1ao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:editor-customchar"} {...others} />);
}

export default Component;
