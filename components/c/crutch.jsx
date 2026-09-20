import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/x/x8wjfjemp.css';
import '../../css/j/je3143bbb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="x8wjfjemp"/><path class="je3143bbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:crutch"} {...others} />);
}

export default Component;
