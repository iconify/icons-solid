import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ttp_dcczj.css';
import '../../css/p/p4-iowb1v.css';
import '../../css/u/u3rxtwnen.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ttp_dcczj"/><path class="p4-iowb1v"/><path clip-rule="evenodd" class="u3rxtwnen"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:resume-16"} {...others} />);
}

export default Component;
