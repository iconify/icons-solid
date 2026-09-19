import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fmlnzirud.css';
import '../../css/f/fh5p1wbcf.css';
import '../../css/w/wjl0m-b2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fmlnzirud"/><path class="fh5p1wbcf"/><path class="wjl0m-b2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:ellipse-3d"} {...others} />);
}

export default Component;
