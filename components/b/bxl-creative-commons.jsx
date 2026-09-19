import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzpap0btc.css';
import '../../css/y/ydu5kibqt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gzpap0btc"/><path class="ydu5kibqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-creative-commons"} {...others} />);
}

export default Component;
