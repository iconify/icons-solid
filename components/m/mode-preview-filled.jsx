import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dbm9vfskf.css';
import '../../css/t/tiuq2lb1s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dbm9vfskf"/><path class="tiuq2lb1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:mode-preview-filled"} {...others} />);
}

export default Component;
