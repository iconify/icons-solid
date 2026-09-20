import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt7khlbia.css';
import '../../css/o/opq0cgqba.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dt7khlbia"/><path class="opq0cgqba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:arweave"} {...others} />);
}

export default Component;
