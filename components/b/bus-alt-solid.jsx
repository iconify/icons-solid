import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/he1sdb3fh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="he1sdb3fh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:bus-alt-solid"} {...others} />);
}

export default Component;
