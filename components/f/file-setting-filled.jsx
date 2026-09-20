import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aniu8tw4w.css';
import '../../css/s/sw-wadboa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aniu8tw4w"/><path class="sw-wadboa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:file-setting-filled"} {...others} />);
}

export default Component;
