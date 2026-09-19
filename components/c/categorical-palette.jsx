import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-dg5fbiy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n-dg5fbiy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:categorical-palette"} {...others} />);
}

export default Component;
