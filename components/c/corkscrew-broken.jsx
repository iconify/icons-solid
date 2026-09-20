import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h1q6dub3m.css';
import '../../css/c/c22ax233i.css';
import '../../css/b/baplkacpw.css';
import '../../css/l/lg1zcpg4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="h1q6dub3m"/><path class="c22ax233i"/><path class="baplkacpw"/><path class="lg1zcpg4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:corkscrew-broken"} {...others} />);
}

export default Component;
