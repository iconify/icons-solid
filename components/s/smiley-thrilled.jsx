import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/es0y-zp9y.css';
import '../../css/p/po5fh-7sr.css';
import '../../css/c/cwoolsbqo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="es0y-zp9y"/><path class="po5fh-7sr"/><path class="cwoolsbqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:smiley-thrilled"} {...others} />);
}

export default Component;
