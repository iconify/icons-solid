import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbf7t6bhf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bbf7t6bhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:everplaces"} {...others} />);
}

export default Component;
