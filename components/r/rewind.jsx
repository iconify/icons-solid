import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kxonx6bxn.css';
import '../../css/g/gu-ybwb-c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kxonx6bxn"/><path class="gu-ybwb-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:rewind"} {...others} />);
}

export default Component;
