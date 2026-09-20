import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxzbmtabh.css';
import '../../css/y/y663-_bpd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wxzbmtabh"/><path class="y663-_bpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:file-import-filled"} {...others} />);
}

export default Component;
