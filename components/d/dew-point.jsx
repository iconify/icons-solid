import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pyaoer-ho.css';
import '../../css/r/r966ofbfn.css';
import '../../css/o/ocorifb7t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pyaoer-ho"/><path class="r966ofbfn"/><path clip-rule="evenodd" class="ocorifb7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:dew-point"} {...others} />);
}

export default Component;
