import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l73x2db2c.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="l73x2db2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:cloud-download-alt"} {...others} />);
}

export default Component;
