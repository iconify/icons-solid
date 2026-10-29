import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oyxnp4cfx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oyxnp4cfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:thandai-solid"} {...others} />);
}

export default Component;
