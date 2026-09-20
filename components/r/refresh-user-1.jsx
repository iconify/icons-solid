import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y4ot-3wmv.css';
import '../../css/r/rbkemp0fh.css';
import '../../css/h/h8ov3rb9y.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="y4ot-3wmv"/><path class="rbkemp0fh"/><path clip-rule="evenodd" class="h8ov3rb9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:refresh-user-1"} {...others} />);
}

export default Component;
