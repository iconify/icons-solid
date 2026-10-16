import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6ztnvvyu.css';
import '../../css/g/gf1alnb4d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t6ztnvvyu"/><path class="gf1alnb4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:box-cutter-20"} {...others} />);
}

export default Component;
