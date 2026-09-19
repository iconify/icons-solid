import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xm92uhb0v.css';

const viewBox = {"width":36,"height":24};
const content = `<path class="xm92uhb0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:mastercard"} {...others} />);
}

export default Component;
