import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxxzk5b7h.css';
import '../../css/c/c06gyab9i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yxxzk5b7h"/><path class="c06gyab9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-refresh"} {...others} />);
}

export default Component;
