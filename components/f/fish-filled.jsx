import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqgpg9bzx.css';
import '../../css/a/atb87lbap.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tqgpg9bzx"/><path clip-rule="evenodd" class="atb87lbap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:fish-filled"} {...others} />);
}

export default Component;
