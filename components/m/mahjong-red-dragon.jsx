import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dw8v8rm4n.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/w/w4bsiacjh.css';
import '../../css/z/z7me5tbpt.css';
import '../../css/g/gznd2dtud.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="dw8v8rm4n"/><g class="jn8qy4bru"><path class="w4bsiacjh"/><path class="z7me5tbpt"/></g><path class="gznd2dtud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:mahjong-red-dragon"} {...others} />);
}

export default Component;
