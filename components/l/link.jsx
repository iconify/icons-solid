import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ifk2jpbym.css';
import '../../css/d/danpsob9t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ifk2jpbym"/><path class="danpsob9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:link"} {...others} />);
}

export default Component;
