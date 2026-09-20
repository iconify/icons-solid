import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rc5w65bap.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="rc5w65bap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:cloud-data-transfer-solid"} {...others} />);
}

export default Component;
