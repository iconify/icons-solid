import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/j/je7grsy9a.css';
import '../../css/r/r7ekmboxx.css';
import '../../css/t/t-c46r-6c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="je7grsy9a"/><path class="r7ekmboxx"/><path class="t-c46r-6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:navigation-next-hexagon-1"} {...others} />);
}

export default Component;
