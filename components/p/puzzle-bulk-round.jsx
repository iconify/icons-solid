import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xf0au4b2c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xf0au4b2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:puzzle-bulk-round"} {...others} />);
}

export default Component;
