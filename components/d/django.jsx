import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lps2qmi-k.css';
import '../../css/h/hx8_3wb3p.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lps2qmi-k"/><path class="hx8_3wb3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:django"} {...others} />);
}

export default Component;
