import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ob0lg7brk.css';
import '../../css/b/bvz2mha2o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ob0lg7brk"/><path class="bvz2mha2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-cloud"} {...others} />);
}

export default Component;
