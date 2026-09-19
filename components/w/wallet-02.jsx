import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c2qhvxbop.css';
import '../../css/y/yeh0umb4r.css';
import '../../css/d/dl30k4pxw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c2qhvxbop"/><path class="yeh0umb4r"/><path class="dl30k4pxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:wallet-02"} {...others} />);
}

export default Component;
