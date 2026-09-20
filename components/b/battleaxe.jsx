import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy88w0bxg.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="jy88w0bxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:battleaxe"} {...others} />);
}

export default Component;
