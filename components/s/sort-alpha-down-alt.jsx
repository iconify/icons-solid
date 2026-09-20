import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1it6dm-v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="j1it6dm-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:sort-alpha-down-alt"} {...others} />);
}

export default Component;
