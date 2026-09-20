import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wg-wcspib.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wg-wcspib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:search-2-line"} {...others} />);
}

export default Component;
