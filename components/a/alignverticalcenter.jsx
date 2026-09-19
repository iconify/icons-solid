import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b90k02bgt.css';

const viewBox = {"width":1024,"height":768};
const content = `<path class="b90k02bgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:alignverticalcenter"} {...others} />);
}

export default Component;
