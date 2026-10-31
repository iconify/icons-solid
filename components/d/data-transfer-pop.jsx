import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a7n48pb0g.css';
import '../../css/i/itlwhwbxr.css';
import '../../css/x/xkg108-hi.css';
import '../../css/c/c_9uzgbhi.css';
import '../../css/i/i609ppoov.css';
import '../../css/g/g6gb1ccko.css';
import '../../css/b/bjq3u4kei.css';
import '../../css/g/gf6jmbb8y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="a7n48pb0g"/><path class="itlwhwbxr"/><path class="xkg108-hi"/><path class="c_9uzgbhi"/><path class="i609ppoov"/><path class="g6gb1ccko"/><path class="bjq3u4kei"/><path class="gf6jmbb8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:data-transfer-pop"} {...others} />);
}

export default Component;
