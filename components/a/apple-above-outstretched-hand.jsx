import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/toozaccsv.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="toozaccsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:apple-above-outstretched-hand"} {...others} />);
}

export default Component;
