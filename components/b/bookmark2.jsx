import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/oazsi7b1e.css';
import '../../css/g/gng03ob7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="oazsi7b1e"/><path class="gng03ob7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bookmark2"} {...others} />);
}

export default Component;
