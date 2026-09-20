import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/auiwbcdbq.css';
import '../../css/x/xafj45btt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="auiwbcdbq"/><path class="xafj45btt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:lunc"} {...others} />);
}

export default Component;
