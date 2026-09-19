import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3uu5lbtk.css';
import '../../css/o/omkgw9bsc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s3uu5lbtk"/><path class="omkgw9bsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:alien"} {...others} />);
}

export default Component;
