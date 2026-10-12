import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r86lgubxd.css';
import '../../css/f/foj_0087j.css';
import '../../css/c/cch-u1bts.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r86lgubxd"/><path class="foj_0087j"/><path class="cch-u1bts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:stethoscope-20"} {...others} />);
}

export default Component;
