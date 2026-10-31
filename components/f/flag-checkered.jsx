import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/m/m6-k53ult.css';
import '../../css/p/pyo5dubfh.css';
import '../../css/v/vs3_2yq5q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="m6-k53ult"/><path class="pyo5dubfh wm-k"/><path class="vs3_2yq5q wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:flag-checkered"} {...others} />);
}

export default Component;
