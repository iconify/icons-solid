import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2qwjtp6x.css';
import '../../css/n/n3zvsabum.css';
import '../../css/l/l3c5_9blk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i2qwjtp6x"/><path class="n3zvsabum"/><path class="l3c5_9blk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:snx"} {...others} />);
}

export default Component;
