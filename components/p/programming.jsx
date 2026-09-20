import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/b/bwr86fd6l.css';
import '../../css/a/a95cswbaz.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="bwr86fd6l"/><path class="a95cswbaz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:programming"} {...others} />);
}

export default Component;
