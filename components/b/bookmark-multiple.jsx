import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/idbul_oyi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="idbul_oyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:bookmark-multiple"} {...others} />);
}

export default Component;
