import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/msqd_f71t.css';
import '../../css/b/bh5yu-cer.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="msqd_f71t"/><path class="bh5yu-cer"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:user-invisible-filled"} {...others} />);
}

export default Component;
