import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aoj2oy0oy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aoj2oy0oy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:alphabet-u-box-outline"} {...others} />);
}

export default Component;
