import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qt-2uw01i.css';
import '../../css/c/clcbemb9z.css';
import '../../css/z/zqkur5bsc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qt-2uw01i"/><path class="clcbemb9z"/><path class="zqkur5bsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mkvpriority"} {...others} />);
}

export default Component;
