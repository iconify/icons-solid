import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tu404jbxe.css';
import '../../css/u/u72bpgb6i.css';
import '../../css/w/w4b6cbclf.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="tu404jbxe"/><path class="u72bpgb6i"/><path class="w4b6cbclf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:tk-4x3"} {...others} />);
}

export default Component;
