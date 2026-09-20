import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hlbpgpbcm.css';
import '../../css/e/eo7tm2haw.css';
import '../../css/x/x_pb5xj5z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hlbpgpbcm"/><path class="eo7tm2haw"/><path class="x_pb5xj5z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:gateway"} {...others} />);
}

export default Component;
