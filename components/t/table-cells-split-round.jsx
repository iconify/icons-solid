import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rtus7tvkc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rtus7tvkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:table-cells-split-round"} {...others} />);
}

export default Component;
