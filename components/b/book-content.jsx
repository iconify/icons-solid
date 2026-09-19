import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etj_qccda.css';
import '../../css/x/xz53smi8c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="etj_qccda"/><path class="xz53smi8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:book-content"} {...others} />);
}

export default Component;
