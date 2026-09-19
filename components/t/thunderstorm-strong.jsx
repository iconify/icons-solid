import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/balw8-bvw.css';
import '../../css/n/n5qoxqb8u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="balw8-bvw"/><path class="n5qoxqb8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:thunderstorm-strong"} {...others} />);
}

export default Component;
