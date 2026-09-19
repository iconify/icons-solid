import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uqu8cgb5t.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="uqu8cgb5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:text-align-justify"} {...others} />);
}

export default Component;
