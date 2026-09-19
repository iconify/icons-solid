import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/i/iv6s3f9qu.css';
import '../../css/w/wrts4ibyy.css';
import '../../css/z/zqr328bxb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGii6p8bai"><g class="wwvp95byt"><path class="iv6s3f9qu"/><path class="wrts4ibyy"/><path class="zqr328bxb"/></g></mask></defs><path mask="url(#SVGii6p8bai)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:beach-umbrella"} {...others} />);
}

export default Component;
