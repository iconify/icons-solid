import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvuze5aol.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g5lk2vbtt.css';
import '../../css/f/fcjy_6bdp.css';

const viewBox = {"width":318,"height":318};
const content = `<defs><path id="SVGuxFuEeJV" class="pvuze5aol"/><mask id="SVGPsU7edNC" width="318" height="318" x="0" y="0" class="n1mjunbsu"><use href="#SVGuxFuEeJV"/></mask></defs><g class="bi12bsetm"><use href="#SVGuxFuEeJV" mask="url(#SVGPsU7edNC)" class="g5lk2vbtt"/><path class="fcjy_6bdp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:styled-components"} {...others} />);
}

export default Component;
