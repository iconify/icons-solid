import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/go9aw19vv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="go9aw19vv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:head-check-outline"} {...others} />);
}

export default Component;
