import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g2ot_552a.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="g2ot_552a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:money-rubl-circle"} {...others} />);
}

export default Component;
