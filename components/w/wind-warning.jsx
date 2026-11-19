import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gayr1mb1f.css';
import '../../css/s/s5s05z0-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gayr1mb1f"/><path class="s5s05z0-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:wind-warning"} {...others} />);
}

export default Component;
