import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e1c6mcb8b.css';
import '../../css/f/fypyp2bjx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e1c6mcb8b"/><path class="fypyp2bjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:data-transfer-document-module"} {...others} />);
}

export default Component;
