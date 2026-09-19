import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lhai0s2xq.css';
import '../../css/a/agy98qb0z.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="lhai0s2xq"/><path class="agy98qb0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:alien"} {...others} />);
}

export default Component;
