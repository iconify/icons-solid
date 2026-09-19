import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xnnwnd5sn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xnnwnd5sn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:pdf"} {...others} />);
}

export default Component;
