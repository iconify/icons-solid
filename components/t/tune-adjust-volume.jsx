import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/j/j9u2y830z.css';
import '../../css/c/c1iszvz2q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="j9u2y830z"/><path class="c1iszvz2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:tune-adjust-volume"} {...others} />);
}

export default Component;
