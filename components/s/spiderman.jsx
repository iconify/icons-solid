import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxh8cdbwr.css';

const viewBox = {"width":835,"height":1024};
const content = `<path class="fxh8cdbwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:spiderman"} {...others} />);
}

export default Component;
