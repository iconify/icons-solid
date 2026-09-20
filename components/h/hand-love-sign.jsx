import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g__luxdwi.css';
import '../../css/v/vn0firbgu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="g__luxdwi"/><path class="vn0firbgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:hand-love-sign"} {...others} />);
}

export default Component;
