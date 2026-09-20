import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xpq9bk8pg.css';
import '../../css/c/c9mzmqb3q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xpq9bk8pg"/><path class="c9mzmqb3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:waze"} {...others} />);
}

export default Component;
