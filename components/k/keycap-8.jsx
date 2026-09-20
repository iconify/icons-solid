import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mrks0fbpf.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/l/l9ms9ac7m.css';
import '../../css/n/n8gu1ebhy.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="mrks0fbpf"/><g class="jn8qy4bru"><path clip-rule="evenodd" class="l9ms9ac7m"/><path class="n8gu1ebhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:keycap-8"} {...others} />);
}

export default Component;
