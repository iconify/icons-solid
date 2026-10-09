import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-adm0bmn.css';
import '../../css/z/zdes4i07z.css';
import '../../css/o/oawqqplkr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d-adm0bmn"/><path class="zdes4i07z"/><path class="oawqqplkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pipeline-20"} {...others} />);
}

export default Component;
