import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/aabazgbha.css';
import '../../css/j/jr1wrxbfo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="aabazgbha"/><path class="jr1wrxbfo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:composition-focus-square"} {...others} />);
}

export default Component;
