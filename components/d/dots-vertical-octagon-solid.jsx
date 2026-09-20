import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwk2iib2v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vwk2iib2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:dots-vertical-octagon-solid"} {...others} />);
}

export default Component;
