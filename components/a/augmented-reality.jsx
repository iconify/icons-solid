import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wiw1n4qap.css';
import '../../css/u/ugyrmsdwo.css';
import '../../css/t/ti3gn7b9e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wiw1n4qap"/><circle class="ugyrmsdwo"/><path class="ti3gn7b9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:augmented-reality"} {...others} />);
}

export default Component;
