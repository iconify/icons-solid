import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2-s34bcz.css';
import '../../css/e/enx63ybox.css';
import '../../css/q/qka6f_bae.css';
import '../../css/t/tjl909b7r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w2-s34bcz"/><path class="enx63ybox"/><path class="qka6f_bae"/><path class="tjl909b7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:picture-stack-landscape"} {...others} />);
}

export default Component;
