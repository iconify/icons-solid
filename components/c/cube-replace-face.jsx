import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/de6dedcci.css';
import '../../css/e/efocz0b-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="de6dedcci"/><path class="efocz0b-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:cube-replace-face"} {...others} />);
}

export default Component;
