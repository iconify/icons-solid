import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/c/c310x3bwe.css';
import '../../css/d/dpv7ulb3e.css';
import '../../css/f/fed5yhuvy.css';
import '../../css/m/md7u2ccyd.css';
import '../../css/n/nhbrc8bbj.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="c310x3bwe"/><path class="dpv7ulb3e"/><path class="fed5yhuvy"/><path class="md7u2ccyd"/><path class="nhbrc8bbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:haxeflixel-light"} {...others} />);
}

export default Component;
