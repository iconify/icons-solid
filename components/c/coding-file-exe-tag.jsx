import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_e5embpi.css';
import '../../css/z/z-1o8dzhg.css';
import '../../css/y/yjv1a9s6g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k_e5embpi"/><path clip-rule="evenodd" class="z-1o8dzhg"/><path class="yjv1a9s6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:coding-file-exe-tag"} {...others} />);
}

export default Component;
