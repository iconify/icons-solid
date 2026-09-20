import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/do5d53btf.css';
import '../../css/j/j6h5hmb5m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="do5d53btf"/><path class="j6h5hmb5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:un-block"} {...others} />);
}

export default Component;
