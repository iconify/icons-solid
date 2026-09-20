import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/whu9aebkh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="whu9aebkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:sort-alphabetically-outline"} {...others} />);
}

export default Component;
