import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ne0nl4bnn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ne0nl4bnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:rupee-sign"} {...others} />);
}

export default Component;
