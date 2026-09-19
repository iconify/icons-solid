import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g2ct9t3oj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="g2ct9t3oj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icons8:mastercard"} {...others} />);
}

export default Component;
