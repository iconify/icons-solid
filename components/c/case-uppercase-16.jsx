import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ootbsqb3k.css';
import '../../css/k/kxz1uwvdj.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ootbsqb3k"/><path clip-rule="evenodd" class="kxz1uwvdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:case-uppercase-16"} {...others} />);
}

export default Component;
