import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n42f4kkrx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n42f4kkrx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:leaf-two"} {...others} />);
}

export default Component;
