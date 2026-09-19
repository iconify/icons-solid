import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xan9nxodn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b xan9nxodn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:pencil-sparkles"} {...others} />);
}

export default Component;
