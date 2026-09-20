import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tb3q4-ebi.css';
import '../../css/h/hf4na_b9p.css';
import '../../css/w/wioby4b9s.css';
import '../../css/r/r7n51--5c.css';

const viewBox = {"width":63,"height":64};
const content = `<path class="tb3q4-ebi"/><path class="hf4na_b9p"/><path class="wioby4b9s"/><path class="r7n51--5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-pathology"} {...others} />);
}

export default Component;
