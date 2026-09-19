import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v22eic7fh.css';
import '../../css/h/h3kz7abjt.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="v22eic7fh"/><path class="h3kz7abjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:nuls"} {...others} />);
}

export default Component;
