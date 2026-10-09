import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gffnzrbyj.css';
import '../../css/d/d3xlh_egt.css';
import '../../css/b/bhb3myb5w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gffnzrbyj"/><path class="d3xlh_egt"/><path class="bhb3myb5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:transformer-20-bold"} {...others} />);
}

export default Component;
