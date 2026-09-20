import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y61w3cbkk.css';
import '../../css/m/mow4xmq7z.css';
import '../../css/k/k6yvmac6f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y61w3cbkk"/><path class="mow4xmq7z"/><path class="k6yvmac6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:card-tick2"} {...others} />);
}

export default Component;
