import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dcddw3bvx.css';
import '../../css/i/i3a4j3hes.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dcddw3bvx"/><path class="i3a4j3hes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:arrow-circle-down"} {...others} />);
}

export default Component;
