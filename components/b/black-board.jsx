import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/s/s8dkgdbrc.css';
import '../../css/b/bgy3u5m7y.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="s8dkgdbrc"/><path class="bgy3u5m7y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:black-board"} {...others} />);
}

export default Component;
