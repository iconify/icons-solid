import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8zpdgb-u.css';
import '../../css/f/fuln-e3lv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e8zpdgb-u"/><path class="fuln-e3lv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:satellite-dish-filled"} {...others} />);
}

export default Component;
