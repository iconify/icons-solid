import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a5fcl1b2z.css';
import '../../css/w/wwt-jfbqh.css';
import '../../css/h/hj5hndk9r.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="a5fcl1b2z"/><path class="wwt-jfbqh"/><path class="hj5hndk9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:dictionary-language-book-flat"} {...others} />);
}

export default Component;
