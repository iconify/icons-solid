import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zclmw7bqj.css';
import '../../css/w/wyksrhbhl.css';
import '../../css/q/qiqucbbuq.css';
import '../../css/y/y6jqneb4d.css';
import '../../css/u/uxixycbrw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zclmw7bqj"/><path class="wyksrhbhl"/><path class="qiqucbbuq"/><path class="y6jqneb4d"/><path class="uxixycbrw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wellhead-20"} {...others} />);
}

export default Component;
