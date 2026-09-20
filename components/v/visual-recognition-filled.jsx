import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zfwmerbfq.css';
import '../../css/z/zbqhemi-u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zfwmerbfq"/><path class="zbqhemi-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:visual-recognition-filled"} {...others} />);
}

export default Component;
