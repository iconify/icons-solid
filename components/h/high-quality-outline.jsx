import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yaom8wbxw.css';
import '../../css/o/ojeg-bwuu.css';
import '../../css/k/k_haes9zn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yaom8wbxw"/><path class="ojeg-bwuu"/><path clip-rule="evenodd" class="k_haes9zn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:high-quality-outline"} {...others} />);
}

export default Component;
