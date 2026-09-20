import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kji6v2qse.css';
import '../../css/z/ztfq1ibst.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kji6v2qse"/><path class="ztfq1ibst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:screen-mirroring-filled"} {...others} />);
}

export default Component;
