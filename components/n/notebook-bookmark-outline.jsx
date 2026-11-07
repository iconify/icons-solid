import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tnyxyabef.css';
import '../../css/v/vwsblbbqy.css';
import '../../css/s/s3m1l3b4t.css';
import '../../css/y/ytx155bjx.css';
import '../../css/u/u7mfpjuoc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tnyxyabef"/><path class="vwsblbbqy"/><path class="s3m1l3b4t"/><path class="ytx155bjx"/><path clip-rule="evenodd" class="u7mfpjuoc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notebook-bookmark-outline"} {...others} />);
}

export default Component;
