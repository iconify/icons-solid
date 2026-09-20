import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/l/lj1vc8a4f.css';
import '../../css/g/gi4a4pb7c.css';

const viewBox = {"width":501,"height":501};
const content = `<g class="n1mjunbsu"><path class="lj1vc8a4f"/><path class="gi4a4pb7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mattermost-dark"} {...others} />);
}

export default Component;
