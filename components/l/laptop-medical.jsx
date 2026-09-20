import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ucubjqe1t.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ucubjqe1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:laptop-medical"} {...others} />);
}

export default Component;
