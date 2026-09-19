import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o59q0tj2u.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="o59q0tj2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:building-electrical"} {...others} />);
}

export default Component;
