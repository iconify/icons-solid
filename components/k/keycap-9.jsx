import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e28o0mlgm.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/u/uha7d-bqe.css';
import '../../css/q/q52c00e9a.css';
import '../../css/j/jn_kjqe6t.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e28o0mlgm"/><g class="jn8qy4bru"><path clip-rule="evenodd" class="uha7d-bqe"/><path clip-rule="evenodd" class="q52c00e9a"/><path class="jn_kjqe6t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:keycap-9"} {...others} />);
}

export default Component;
