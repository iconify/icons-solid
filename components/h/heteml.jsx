import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ma5rg2bxg.css';

const viewBox = {"width":1132,"height":626};
const content = `<path class="ma5rg2bxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:heteml"} {...others} />);
}

export default Component;
