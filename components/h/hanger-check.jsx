import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebw6zj4kp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ebw6zj4kp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:hanger-check"} {...others} />);
}

export default Component;
