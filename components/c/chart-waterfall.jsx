import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fidptbk8m.css';
import '../../css/v/vb_01fboe.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fidptbk8m"/><path class="vb_01fboe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:chart-waterfall"} {...others} />);
}

export default Component;
