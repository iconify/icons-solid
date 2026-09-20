import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5p3c1b7v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a5p3c1b7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:shield-alt-solid"} {...others} />);
}

export default Component;
