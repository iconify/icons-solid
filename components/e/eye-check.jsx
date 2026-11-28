import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/falq6obii.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="falq6obii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:eye-check"} {...others} />);
}

export default Component;
