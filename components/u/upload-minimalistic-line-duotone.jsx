import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x8f9lbbka.css';
import '../../css/a/ac19bow3y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x8f9lbbka"/><path class="ac19bow3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:upload-minimalistic-line-duotone"} {...others} />);
}

export default Component;
