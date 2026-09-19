import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txy4c3lcb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="txy4c3lcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-bank"} {...others} />);
}

export default Component;
