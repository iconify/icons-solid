import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ive95xbok.css';
import '../../css/a/a5lh8nbos.css';
import '../../css/a/ak7k5s97a.css';
import '../../css/w/wzzmmnqec.css';

const viewBox = {"width":79,"height":78};
const content = `<g class="bi12bsetm"><path class="ive95xbok"/><path class="a5lh8nbos"/><path class="ak7k5s97a"/><path class="wzzmmnqec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:postcss"} {...others} />);
}

export default Component;
