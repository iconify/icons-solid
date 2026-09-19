import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a-_te6bcd.css';
import '../../css/j/jgcqempew.css';
import '../../css/c/cfwhifxgg.css';
import '../../css/o/oc7o-9boq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a-_te6bcd"/><circle class="jgcqempew"/><circle class="cfwhifxgg"/><path class="oc7o-9boq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-git-2"} {...others} />);
}

export default Component;
