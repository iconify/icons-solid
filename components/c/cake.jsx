import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/i/iqyfnccjz.css';
import '../../css/h/h8rvyfble.css';
import '../../css/y/yhtn9ti7t.css';
import '../../css/f/fiogixb5h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="iqyfnccjz"/><path class="h8rvyfble wm-shine"/><path class="wm-k yhtn9ti7t"/><path class="fiogixb5h wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:cake"} {...others} />);
}

export default Component;
