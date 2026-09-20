import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wv0rdoajs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wv0rdoajs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:chevron-left-right"} {...others} />);
}

export default Component;
