import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xunbskfrx.css';
import '../../css/t/t756e-aqg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xunbskfrx"/><path class="t756e-aqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:file-zip"} {...others} />);
}

export default Component;
