import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/b/b7h9cn33g.css';
import '../../css/z/zbni9b2lu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="b7h9cn33g"/><path class="zbni9b2lu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:application-add"} {...others} />);
}

export default Component;
