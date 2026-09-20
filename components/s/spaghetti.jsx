import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7btscqre.css';
import '../../css/r/rnzlaxb7z.css';
import '../../css/w/wmnp8k1mt.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/a/acn08zbab.css';
import '../../css/t/tnw9eabke.css';
import '../../css/f/f4cuztb7k.css';
import '../../css/g/gfkp7obeb.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e7btscqre"/><path class="rnzlaxb7z"/><path class="wmnp8k1mt"/><g class="jn8qy4bru"><path class="acn08zbab"/><path class="tnw9eabke"/><path class="f4cuztb7k"/><path class="gfkp7obeb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:spaghetti"} {...others} />);
}

export default Component;
