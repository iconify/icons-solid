import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yzkpf5bsr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yzkpf5bsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rewind-back-outline"} {...others} />);
}

export default Component;
