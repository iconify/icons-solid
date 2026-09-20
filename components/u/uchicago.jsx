import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc5o9yeae.css';

const viewBox = {"width":250,"height":62.734};
const content = `<path class="vc5o9yeae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:uchicago"} {...others} />);
}

export default Component;
