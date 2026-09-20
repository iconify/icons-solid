import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8-suub8d.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="h8-suub8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:plus-square-solid"} {...others} />);
}

export default Component;
