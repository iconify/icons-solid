import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vaiqf7u2v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vaiqf7u2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:battle-net"} {...others} />);
}

export default Component;
