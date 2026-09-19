import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d357irbtg.css';
import '../../css/t/tuels9bhh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="d357irbtg"/><path class="tuels9bhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency:drgn"} {...others} />);
}

export default Component;
