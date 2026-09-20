import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kw0xa2w6s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kw0xa2w6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:close-circle-multiple"} {...others} />);
}

export default Component;
