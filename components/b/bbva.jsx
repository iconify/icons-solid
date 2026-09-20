import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/krxl8tomz.css';

const viewBox = {"width":3543.2,"height":1059.5};
const content = `<path class="krxl8tomz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:bbva"} {...others} />);
}

export default Component;
