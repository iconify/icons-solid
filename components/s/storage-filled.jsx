import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6ngtbcis.css';
import '../../css/k/k5o2fzblv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c6ngtbcis"/><path clip-rule="evenodd" class="k5o2fzblv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:storage-filled"} {...others} />);
}

export default Component;
