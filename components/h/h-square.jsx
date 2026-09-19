import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nt_ihrbvp.css';

const viewBox = {"width":1792,"height":1792};
const content = `<path class="nt_ihrbvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:h-square"} {...others} />);
}

export default Component;
