import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/un0v2foqd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="un0v2foqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:wall-sconce-variant"} {...others} />);
}

export default Component;
