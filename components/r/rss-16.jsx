import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n90mr95xf.css';
import '../../css/z/z80svlg0j.css';
import '../../css/d/dzo9b7bid.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="n90mr95xf"/><path class="z80svlg0j"/><path class="dzo9b7bid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:rss-16"} {...others} />);
}

export default Component;
