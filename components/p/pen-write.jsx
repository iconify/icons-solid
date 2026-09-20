import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bblhey7vn.css';
import '../../css/z/z_itwpb8c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bblhey7vn"/><path class="z_itwpb8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:pen-write"} {...others} />);
}

export default Component;
