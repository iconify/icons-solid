import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tw0jtkbfd.css';
import '../../css/p/prq88gola.css';
import '../../css/z/zy5m7gbdl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tw0jtkbfd"/><path class="prq88gola"/><path class="zy5m7gbdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-stack-filled"} {...others} />);
}

export default Component;
