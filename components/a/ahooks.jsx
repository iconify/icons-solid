import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u2398wb7u.css';
import '../../css/s/s76kbrb9m.css';

const viewBox = {"width":44,"height":44};
const content = `<g class="ft5dv1b6b"><rect class="u2398wb7u"/><path class="s76kbrb9m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:ahooks"} {...others} />);
}

export default Component;
