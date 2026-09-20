import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/h/hy9wdx43l.css';
import '../../css/q/qb_-_ru-a.css';
import '../../css/u/ucd0njbco.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="hy9wdx43l"/><path class="qb_-_ru-a"/><path class="ucd0njbco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:flutter-light"} {...others} />);
}

export default Component;
